import { Router } from "express";
import { authCode, authToken } from "../middlewares/auth.js";

const router = Router();
router
.post("/code", authCode, authToken)
.post("/token", authToken)
.post("/refresh")
.post("/revoke")
.post("/callback")

export default router;