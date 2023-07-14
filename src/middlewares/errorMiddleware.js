import mongoose from "mongoose";

// eslint-disable-next-line no-unused-vars
function errorMiddleware(error, req, res, next) {
  if (error instanceof mongoose.Error.CastError) {
    res.status(400).send({ message: "Um ou mais dados fornecidos estão incorretos." });
  } else {
    res.status(500).send({ message: "Houve um erro interno no servidor." });
  }
}
export default errorMiddleware;