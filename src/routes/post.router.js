const postUseCase = require("../usecases/post.usecase");
const express = require("express");
const auth = require("../middlewares/auth.middleware");
const createError = require("http-errors");

const router = express.Router();

// GET /posts
router.get("/", async (request, response) => {
  try {
    const posts = await postUseCase.getAll();

    response.json({
      success: true,
      message: "All posts",
      data: { posts },
    });
  } catch (error) {
    response.status(error.status || 500);
    response.json({
      success: false,
      message: error.message,
    });
  }
});

// GET /posts/search
router.get("/search", async (request, response) => {
  try {
    const post = await postUseCase.search(request.query);

    response.json({
      success: true,
      message: "Post found",
      data: { post },
    });
  } catch (error) {
    response.status(error.status || 500);
    response.json({
      success: false,
      message: error.message,
    });
  }
});

// POST /posts
router.post("/", auth, async (request, response) => {
  try {
    const idUser = request.user;
    const newPost = await postUseCase.create(request.body, idUser);
    response.json({
      success: true,
      message: "Post created",
      data: { post: newPost },
    });
  } catch (error) {
    response.status(error.status || 500);
    response.json({
      success: false,
      message: error.message,
    });
  }
});

// GET /posts/:id
router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const post = await postUseCase.getById(id);
    response.json({
      success: true,
      message: "Post found",
      data: { post },
    });
  } catch (error) {
    response.status(error.status || 500);
    response.json({
      success: false,
      message: error.message,
    });
  }
});

// DELETE /posts/:id
router.delete("/:id", auth, async (request, response) => {
  try {
    const { id } = request.params;
    const idUser = request.user;
    const post = await postUseCase.getById(id);
    if (idUser !== post.user) {
      throw createError(403, "You don't have permission to delete this post");
    }
    const postDeleted = await postUseCase.deleteById(id);
    response.json({
      success: true,
      message: "Post deleted",
      data: { post: postDeleted },
    });
  } catch (error) {
    response.status(error.status || 500);
    response.json({
      success: false,
      message: error.message,
    });
  }
});

// PATCH /posts/:id
router.patch("/:id", auth, async (request, response) => {
  try {
    const { id } = request.params;
    const idUser = request.user;
    const post = await postUseCase.getById(id);
    if (idUser !== post.user) {
      throw createError(403, "You don't have permission to update this post");
    }
    const postUpdated = await postUseCase.updateById(id, request.body);
    response.json({
      success: true,
      message: "Post updated",
      data: { post: postUpdated },
    });
  } catch (error) {
    response.status(error.status || 500);
    response.json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
