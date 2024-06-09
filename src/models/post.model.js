const mongoose = require("mongoose");

const modelName = "posts";

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxLenght: 100,
  },
  img: {
    type: String,
    required: false,
  },
  body: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model(modelName, schema);
