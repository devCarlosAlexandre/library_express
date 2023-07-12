import express from "express";
import livros from "./livros_routes.js";
import autores from "./autoresRoutes.js";


const routes = (app) => {
  app.use(
    express.json(),
    livros,
    autores
  );
};

export default routes;