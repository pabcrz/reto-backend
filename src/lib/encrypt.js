const bcrypt = require("bcryptjs");

const SALT_ROUNDS = 10;

const encrypt = (text) => bcrypt.hash(text, SALT_ROUNDS);

const compare = (text, hash) => bcrypt.compare(text, hash);

module.exports = {
  encrypt,
  compare,
};
