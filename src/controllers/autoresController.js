import autores from "../models/Autor.js";

class AutorController {
    static getAutores = (req, res) => {
        autores.find((err, autor) => {
            res.status(200).json(autor);
        });
    };

    static cadastrarAutor = (req, res) => {
        let autor = new autores(req.body);

        autor.save((err) => {
            if (err) {
                res.status(500).send({ message: `${err} - falha ao cadastrar autor` });
            } else {
                res.status(201).send(autor.toJSON());
            };
        });
    };

    static editarAutor = (req, res) => {
        const { id } = req.params;

        autores.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (!err) {
                res.status(200).send({ message: "autor foi atualizado com sucesso" });
            } else {
                res.status(500).send({ message: `${err} - falha ao editar autor` });
            }

        })
    }

    static buscarAutorId = (req, res) => {
        const id = req.params.id;

        autores.findById(id, (err, autores) => {
            if (err) {
                res.status(400).send({ message: `${err.message} - Id do autor não localizado.` })
            } else {
                res.status(200).send(autores);
            }
        })
    }

    static deletarAutor = (req, res) => {
        const { id } = req.params;
        autores.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({ message: `autor deletado com sucesso` })
            } else {
                res.status(500).send(autores);
            }
        })
    }

}

export default AutorController  ;