const express = require("express");

const app = express();

app.use(express.json());
let books1 = [
  {
    id: 0,
    titulo: "É o testas",
    editora: "testa",
    foto: "éotestas.png",
  },
  {
    id: 1,
    titulo: "É o testas",
    editora: "testa",
    foto: "éotestas.png",
  },
  {
    id: 2,
    titulo: "É o testas",
    editora: "testa",
    foto: "éotestas.png",
  },
  {
    id: 3,
    titulo: "É o testas",
    editora: "testa",
    foto: "éotestas.png",
  },
];

app.get("/obras", (_, res) => {
  return res.json(books1);
});

app.post("/obras", (req, res) => {
  const { id, titulo, editora, foto } = req.body;
  books1.push({ id: id, titulo: titulo, editora: editora, foto: foto });

  return res.status(200).json("Criado com sucesso");
});

app.delete("/obras/:id", (req, res) => {
  const id = req.params.id;
  const idNumber = Number(id);
  let newBooks = books1.filter((item) => {
    if (item.id !== idNumber) {
      return 1;
    }
  });

  books1 = newBooks;
  return res.send(books1);
});

app.put("/obras/:id", (req, res) => {
  const id = req.params.id;
  const idNumber = Number(id);
  const { titulo, editora, foto } = req.body;
  books1.map((item) => {
    if (item.id === idNumber) {
      item.titulo = titulo;
      item.foto = foto;
      item.editora = editora;
    }
    return;
  });

  return res.send(books1);
});

app.listen(3000);
