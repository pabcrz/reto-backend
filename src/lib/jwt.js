const e = require("cors");
const jsonwebtoken = require("jsonwebtoken");

const JWT_SECRET = process.env;

const sign = (payload) =>
  jsonwebtoken.sign(payload, JWT_SECRET, { expiresIn: "1h" });

const verify = (token) => jsonwebtoken.verify(token, JWT_SECRET);

module.exports = {
  sign,
  verify,
};
