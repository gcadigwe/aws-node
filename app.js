const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({
    msg: "Hello world this is sarzy",
  });
});

app.listen(3000);
