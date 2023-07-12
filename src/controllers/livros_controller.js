import livros from "../models/Livro.js";

class LivroController {
    static getLivros = (req, res) => {
        livros.find((err, livro) => {
            res.status(200).json(livro);
        });
    };

    static cadastrarLivro = (req, res) => {
        let livro = new livros(req.body);

        livro.save((err) => {
            if (err) {
                res.status(500).send({ message: `${err} - falha ao cadastrar livro` });
            } else {
                res.status(201).send(livro.toJSON());
            };
        });
    };

    static editarLivro = (req, res) => {
        const { id } = req.params;

        livros.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (!err) {
                res.status(200).send({ message: "Livro foi atualizado com sucesso" });
            } else {
                res.status(500).send({ message: `${err} - falha ao editar livro` });
            }

        })
    }

    static buscarLivroId = (req, res) => {
        const id = req.params.id;

        livros.findById(id, (err, livros) => {
            if (err) {
                res.status(400).send({ message: `${err.message} - Id do livro não localizado.` })
            } else {
                res.status(200).send(livros);
            }
        })
    }

    static deletarLivro = (req, res) => {
        const { id } = req.params;
        livros.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({ message: `livro deletado com sucesso` })
            } else {
                res.status(500).send(livros);
            }
        })
    }

}

export default LivroController;