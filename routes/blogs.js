import { Router } from "express";
import blogController from "../controller/blog.js"

const router = Router();
router

.get("/", blogController.getAll)
.get("/:title", blogController.getOne)
.post("/", blogController.create)

export default router;