import express from "express";
import livros from "./livros_routes.js";


const routes = (app) => {
    app.use(
        express.json(),
        livros
    )
}

export default routes;