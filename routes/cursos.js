import { Router } from "express";

const router = Router();
router

.get("/", (req, res) => {
    res.send("GET /cursos");
})

.post("/", (req, res) => {
    res.send("POST /cursos");
})

.get("/:id", (req, res) => {
    res.send("GET /cursos/:id");
})

export default router;