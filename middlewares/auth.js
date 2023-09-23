import dotenv from "dotenv";
dotenv.config();

const config = {
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    method: "POST",
    body: `client_id=${process.env.OAUTH2_DISCORD_CLIENT_ID}&client_secret=${process.env.OAUTH2_DISCORD_CLIENT_SECRET}&redirect_uri=${process.env.OAUTH2_DISCORD_REDIRECT_URI}&`,
};

const authCode = async (req, res, next) => {
    try {
        const { code } = req.body;
        if (!code) return res.status(400).json({ error: "code is required" });
        const configClone = structuredClone(config)
        configClone.method = "POST";
        configClone.body += `grant_type=authorization_code&code=${code}`;
        const resultCode = await (
            await fetch("https://discord.com/api/oauth2/token", configClone)
        ).json();
        if (resultCode.error)
            return res
                .status(400)
                .json({ error: "Error al iniciar sesion con Discord" });
        //TODO: Guardar el token en la base de datos y el token de refresco
        req.discord = {
            token: resultCode.access_token,
            refreshToken: resultCode.refresh_token,
        };
        next();
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const authToken = async (req, res, next) => {
    try {
        const { token } = req.discord || req.body;
        if (!token) return res.status(400).json({ error: "token is required" });
        const configClone = structuredClone(config)
        configClone.method = "GET";
        configClone.headers.Authorization = `Bearer ${token}`;
        configClone.body = null;
        const resultToken = await (
            await fetch(
                "https://discord.com/api/users/@me/guilds/1101581994355347526/member",
                configClone
            )
        ).json();
        if (resultToken.error)
            return res
                .status(400)
                .json({ error: "Error al iniciar sesion con Discord" });
        //TODO: Guardar datos del usuario en la base de datos
        return res.status(200).json({ usuario: resultToken, token });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export { authCode, authToken };
