import { Router } from "express";
import comentarioController from "../controller/comentarios.js"

const router = Router();
router

.post("/", comentarioController.create)

.get("/:id", comentarioController.getByIdPadre)

export default router;