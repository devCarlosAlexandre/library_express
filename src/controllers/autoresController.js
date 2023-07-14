import autores from "../models/Autor.js";

class AutorController {
  static getAutores = async (req, res, next) => {
    try {
      const autoresResultado = await autores.find();
      res.status(200).json(autoresResultado);
    } catch (error) {
      next(error);
    }
  };

  static cadastrarAutor = async (req, res, next) => {
    let autor = new autores(req.body);

    try {
      await autor.save();
      res.status(201).send(autor.toJSON());
    } catch (error) {
      next(error);
    }

  };

  static editarAutor = async (req, res, next) => {
    const { id } = req.params;
    try {
      await autores.findByIdAndUpdate(id, { $set: req.body });
      res.status(200).send({ message: "autor foi atualizado com sucesso" });
    } catch (error) {
      next(error);
    }
  };

  static buscarAutorId = async (req, res, next) => {
    const id = req.params.id;
    try {
      const autoresResultado = await autores.findById(id);

      if (autoresResultado === null) {
        res.status(404).send({ message: "Autor não encontrado." });
      }

      res.status(200).send(autoresResultado);
    } catch (error) {
      next(error);
    }
  };

  static deletarAutor = async (req, res, next) => {
    const { id } = req.params;
    try {
      await autores.findByIdAndDelete(id);
      res.status(200).send({ message: "autor deletado com sucesso" });
    } catch (error) {
      next(error);
    }
  };

}

export default AutorController;