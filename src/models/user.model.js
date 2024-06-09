const mongoose = require("mongoose");

const modelName = "user";

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxLenght: 100,
  },
  profilePic: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
  },
  password: {
    type: String,
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
