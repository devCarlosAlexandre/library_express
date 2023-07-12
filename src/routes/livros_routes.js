import express from "express";
import LivroController from "../controllers/livros_controller.js";

const router = express.Router();

router
    .get("/livros", LivroController.getLivros)
    .post("/livros", LivroController.cadastrarLivro)
    .put("/livros/:id", LivroController.editarLivro)

export default router;  