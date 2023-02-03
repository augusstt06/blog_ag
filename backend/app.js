const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.listen(3001, () => {
  console.log("3001번 포트");
});

app.get("/", (req, res) => {
  res.send("Hi express");
});
