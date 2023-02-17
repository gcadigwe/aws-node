const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({
    msg: "Hello world this is uat",
  });
});

app.listen(3000);
