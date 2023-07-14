import express from "express";
import db from "./config/db_connect.js";
import routes from "./routes/index.js";
import errorMiddleware from "./middlewares/errorMiddleware.js";

db.on("error", console.log.bind(console, "Error de conexão"));
db.once("open", () => {
  console.log("conexão com o banco feita com sucesso!");
});

const app = express();
app.use(express.json());
routes(app);

// eslint-disable-next-line no-unused-vars
app.use(errorMiddleware);

export default app; 