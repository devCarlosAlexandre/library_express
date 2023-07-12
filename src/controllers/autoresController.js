import autores from "../models/Autor.js";

class AutorController {
  static getAutores = async (req, res) => {
    try {
      const autoresResultado = await autores.find();
      res.status(200).json(autoresResultado);
    } catch (error) {
      res.status(500).json(error);
    }
  };

  static cadastrarAutor = async (req, res) => {
    let autor = new autores(req.body);

    try {
      await autor.save();
      res.status(201).send(autor.toJSON());
    } catch (error) {
      res.status(500).send({ message: `${error} - falha ao cadastrar autor` });
    }

  };

  static editarAutor = async (req, res) => {
    const { id } = req.params;
    try {
      await autores.findByIdAndUpdate(id, { $set: req.body });
      res.status(200).send({ message: "autor foi atualizado com sucesso" });
    } catch (error) {
      res.status(500).send({ message: `${error} - falha ao editar autor` });
    }
  };

  static buscarAutorId = async (req, res) => {
    const id = req.params.id;
    try {
      await autores.findById(id);
      res.status(200).send(autores);
    } catch (error) {
      res.status(500).send({ message: "Houve um erro interno no servidor" });
    }
  };

  static deletarAutor = async (req, res) => {
    const { id } = req.params;
    try {
      await autores.findByIdAndDelete(id);
      res.status(200).send({ message: "autor deletado com sucesso" });
    } catch (error) {
      res.status(500).send(error);
    }
  };

}

export default AutorController;