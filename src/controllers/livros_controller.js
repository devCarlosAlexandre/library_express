import livros from "../models/Livro.js";

class LivroController {
  static getLivros = async (req, res, next) => {
    try {
      const livro = await livros.find().populate("autor");
      res.status(200).json(livro);
    } catch (error) {
      next(error);
    }
  };

  static cadastrarLivro = async (req, res, next) => {
    let livro = new livros(req.body);
    try {
      livro.save();
      res.status(201).send(livro.toJSON());
    } catch (error) {
      next(error);
    }
  };

  static editarLivro = async (req, res, next) => {
    const { id } = req.params;
    try {
      livros.findByIdAndUpdate(id, { $set: req.body });
      res.status(200).send({ message: "Livro foi atualizado com sucesso" });
    } catch (error) {
      next(error);
    }
  };

  static buscarLivroId = async (req, res, next) => {
    const id = req.params.id;
    try {
      await livros.findById(id).populate("autor", "nome").exec();
      res.status(200).send(livros);
    } catch (error) {
      next(error);
    }
  };

  static deletarLivro = async (req, res, next) => {
    const { id } = req.params;
    try {
      await livros.findByIdAndDelete(id);
      res.status(200).send({ message: "livro deletado com sucesso" });
    } catch (error) {
      next(error);
    }
  };

  static listarLivroPorEditora = async (req, res, next) => {
    const editora = req.query.editora;
    try {
      await livros.find({ "editora": editora }, {});
      res.status(200).send(livros);
    } catch (error) {
      next(error);
    }
  };
}

export default LivroController;