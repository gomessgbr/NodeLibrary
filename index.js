const express = require("express");

const app = express();

app.get("/teste", () => {
  console.loig("É o teste porra !");
});

app.listen(3000);
