const cors = require("cors");
const express = require("express");

const app = express();

//middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "DEV.TO API" });
});

module.exports = app;
