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

}

export default LivroController;