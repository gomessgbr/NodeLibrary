const express = require("express");
const app = express();
app.use(express.json());

const books = [];

app.get("/obras", (req, res) => {
  return res.json(books);
});

app.post("/obras", (req, res) => {
  const { id, titulo, editora, foto } = req.body;
  books.push(id, titulo, editora, foto);
  return res.json(books);
});


app.listen(3000);
