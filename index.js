const express = require("express");

const app = express();
app.use(express.json());
const books = [];

app.get("/obras/", (req, res) => {
  return res.json(books);
});

app.listen(3000);
