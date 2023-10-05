import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRouter from "./routes/auth.js";
import cursosRouter from "./routes/cursos.js";
import comentariosRouter from "./routes/comentarios.js";
import blogsRouter from "./routes/blogs.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/auth", authRouter)
app.use("/cursos", cursosRouter)
app.use("/comentarios", comentariosRouter)
app.use("/blogs", blogsRouter)

app.listen(process.env.PORT, () => {
    console.log(`Server is running at port ${process.env.PORT}`);
    }
);