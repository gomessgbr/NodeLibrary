const express = require("express");
const app = express();
app.use(express.json());
const books = require("./books.json");
// let books = {};

app.get("/obras", (_, res) => {
  return res.json(books);
});

app.post("/obras", (req, res) => {
  const { id, titulo, editora, foto } = req.body;
  books[id] = { id, titulo, editora, foto };
  return res.status(200).json("Criado com sucesso");
});

app.delete("/obras/:id", (req, res) => {
  const id = req.params.id;
  let newBooks = books.filter((item) => {
    if (!item[id]) {
      return item;
    }
  });

  books = newBooks;
  return res.send(newBooks);
});

app.put("/obras/:id", (req, res) => {
  const id = req.params.id;
  if (id) {
  }
});

// Todo
/* - Terminar a rota delete
   - E fazer a rota de put
*/

app.listen(3000);
