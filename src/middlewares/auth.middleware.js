const createError = require("http-errors");
const userUseCase = require("../usecases/user.usecase");
const jwt = require("../lib/jwt");

async function authMiddleware(request, response, next) {
  try {
    const token = request.headers.authorization;

    if (!token) {
      throw createError(401, "Authorization header is required");
    }

    const payload = jwt.verify(token);

    const user = await userUseCase.getById(payload.id);
    if (!user) {
      throw createError(404, "User not found");
    }

    request.user = user;
    next();
  } catch (error) {
    response.status(400);
    response.json({
      success: false,
      error: error.message,
    });
  }
}

module.exports = authMiddleware;
