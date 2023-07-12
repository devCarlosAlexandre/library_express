import livros from "../models/Livro.js";

class LivroController {
  static getLivros = async (req, res) => {
    try {
      const livro = await livros.find().populate("autor");
      res.status(200).json(livro);
    } catch (error) {
      res.status(500).json({ message: "Houve um erro interno no servidor" });
    }
  };

  static cadastrarLivro = async (req, res) => {
    let livro = new livros(req.body);
    try {
      livro.save();
      res.status(201).send(livro.toJSON());
    } catch (error) {
      res.status(500).json({ message: `${error} - falha ao cadastrar livro` });
    }
  };

  static editarLivro = async (req, res) => {
    const { id } = req.params;
    try {
      livros.findByIdAndUpdate(id, { $set: req.body });
      res.status(200).send({ message: "Livro foi atualizado com sucesso" });
    } catch (error) {
      res.status(500).send({ message: `${error} - falha ao editar livro` });
    }
  };

  static buscarLivroId = async (req, res) => {
    const id = req.params.id;
    try {
      await livros.findById(id).populate("autor", "nome").exec();
      res.status(200).send(livros);
    } catch (error) {
      res.status(400).send({ message: `${error.message} - Id do livro não localizado.` });
    }
  };

  static deletarLivro = async (req, res) => {
    const { id } = req.params;
    try {
      await livros.findByIdAndDelete(id);
      res.status(200).send({ message: "livro deletado com sucesso" });
    } catch (error) {
      res.status(500).send(livros);
    }
  };

  static listarLivroPorEditora = async (req, res) => {
    const editora = req.query.editora;
    try {
      await livros.find({ "editora": editora }, {});
      res.status(200).send(livros);
    } catch (error) {
      res.status(500).send({ message: `${error.message} - Houve um error interno no servidor` });
    }
  };
}

export default LivroController;