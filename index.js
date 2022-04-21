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

app.delete("/obras/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  //   books.splice(id,1)
  console.log(books);
  return res.send();
});

// Todo
/* - Terminar a rota delete
   - E fazer a rota de put
*/

app.listen(3000);
