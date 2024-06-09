const cors = require("cors");
const express = require("express");

const userRouter = require("./routes/user.router");
const postRouter = require("./routes/post.router");

const app = express();

//middleware
app.use(cors());
app.use(express.json());

app.use("/users", userRouter);
app.use("/posts", postRouter);

app.get("/", (req, res) => {
  res.json({ message: "DEV.TO API" });
});

module.exports = app;
