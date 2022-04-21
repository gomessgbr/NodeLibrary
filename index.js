const express = require("express");

const app = express();

app.get("/teste", () => {
  console.log("É o teste porra !");
});

app.listen(3000);
