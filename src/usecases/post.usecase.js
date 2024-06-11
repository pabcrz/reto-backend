const createError = require("http-errors");
const Post = require("../models/post.model");

const create = async (postData, idUser) => {
  postData.user = idUser;
  const newPost = await Post.create(postData);
  return newPost;
};

const getAll = async () => await Post.find().populate("user");

const search = async (query) => {
  const postExists = await Post.findOne({ title: query.title });

  if (!postExists) throw new createError(404, "Post not found");

  const post = await Post.find(query).populate("user");

  return post;
};

const getById = async (id) => await Post.findById(id).populate("user");

const updateById = async (id, newPostData) => {
  const { user } = newPostData;
  if (user) {
    throw new createError(409, "User cannot be updated");
  }
  return await Post.findByIdAndUpdate(id, newPostData, { new: true });
};

const deleteById = async (id) => await Post.findByIdAndDelete(id);

module.exports = {
  create,
  getAll,
  updateById,
  deleteById,
  getById,
  search,
};
