import express from "express";
import AutorController from "../controllers/autoresController.js";

const router = express.Router();

router
    .get("/autores", AutorController.getAutores)
    .get("/autores/:id", AutorController.buscarAutorId)
    .post("/autores", AutorController.cadastrarAutor)
    .put("/autores/:id", AutorController.editarAutor)
    .delete("/autores/:id", AutorController.deletarAutor)

export default router;  