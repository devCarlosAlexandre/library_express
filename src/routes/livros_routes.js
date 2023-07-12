import express from "express";
import LivroController from "../controllers/livros_controller.js";

const router = express.Router();

router
    .get("/livros", LivroController.getLivros)
    .get("/livros/:id", LivroController.buscarLivroId)
    .post("/livros", LivroController.cadastrarLivro)
    .put("/livros/:id", LivroController.editarLivro)
    .delete("/livros/:id", LivroController.deletarLivro)

export default router;  