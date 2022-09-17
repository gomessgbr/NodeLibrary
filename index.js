const express = require("express");
const fs = require("fs");
const app = express();
app.use(express.json());
// const books = require("./books.json");
const books1 = [];

// app.get("/obras", (_, res) => {
//   return res.json(books);
// });

app.post("/obras", (req, res) => {
  const { id, titulo, editora, foto } = req.body;
  books1.push({ id: id, titulo: titulo, editora: editora, foto: foto });
  fs.writeFileSync("./books.json", JSON.stringify(books1), {
    encoding: "utf8",
  });
  // books[id] = { id, titulo, editora, foto };

  return res.status(200).json("Criado com sucesso");
});

app.delete("/obras/:id", (req, res) => {
  const id = req.params.id;
  let newBooks = books.filter((item) => {
    if (!item[id]) {
      return item;
    }
  });

//   books = newBooks;
//   return res.send(newBooks);
// });

// app.put("/obras/:id", (req, res) => {
//   const id = req.params.id;
//   if (id) {
//   }
// });

app.listen(3000);
