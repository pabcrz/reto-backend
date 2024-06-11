const cors = require("cors");
const express = require("express");

const userRouter = require("./routes/user.router");
const postRouter = require("./routes/post.router");
const authRouter = require("./routes/auth.router");

const app = express();

//middleware
app.use(cors());
app.use(express.json());

app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/auth", authRouter);

app.get("/", (req, res) => {
  res.json({ message: "DEV.TO API" });
});

module.exports = app;
