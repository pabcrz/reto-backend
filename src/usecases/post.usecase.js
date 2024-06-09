const createError = require("http-errors");
const Post = require("../models/post.model");

const create = async (postData) => {
  const newPost = await Post.create(postData);
  return newPost;
};

const getAll = async () => await Post.find().populate("user");

const updateById = async (id, newPostData) => {
  const { user } = newPostData;
  if (user) {
    throw new createError(409, "User cannot be updated");
  }
  await Post.findByIdAndUpdate(id, newPostData, { new: true });
};

const deleteById = async (id) => await Post.findByIdAndDelete(id);

module.exports = {
  create,
  getAll,
  updateById,
  deleteById,
};
