const createError = require("http-errors");
const User = require("../models/user.model");
const encrypt = require("../lib/encrypt");

async function create(userData) {
  const userExists = await User.findOne({ email: userData.email });
  if (userExists) {
    throw new createError(409, "Email already exists");
  }

  userData.password = await encrypt.encrypt(userData.password);

  const newUser = await User.create(userData);
  return newUser;
}

const getAll = async () => await User.find();

const getById = async (id) => await User.findById(id);

const updateById = async (id, newUserData) =>
  await User.findByIdAndUpdate(id, newUserData, { new: true });

module.exports = {
  create,
  getAll,
  getById,
  updateById,
};
