const userUseCase = require("../usecases/user.usecase");
const express = require("express");
const auth = require("../middlewares/auth.middleware");

const router = express.Router();

router.get("/", async (request, response) => {
  try {
    const users = await userUseCase.getAll();
    response.json({
      success: true,
      message: "All users",
      data: { users },
    });
  } catch (error) {
    response.status(error.status || 500);
    response.json({
      success: false,
      message: error.message,
    });
  }
});

// POST /users
router.post("/", async (request, response) => {
  try {
    const newUser = await userUseCase.create(request.body);

    response.json({
      success: true,
      message: "User created",
      data: { user: newUser },
    });
  } catch (error) {
    response.status(error.status || 500);
    response.json({
      success: false,
      message: error.message,
    });
  }
});

router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const user = await userUseCase.getById(id);

    response.json({
      success: true,
      message: "User found",
      data: { user },
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
