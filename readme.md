# Backend Challenge

This backend project is designed as the API for DEV.to, a software development platform that allows users to publish posts. The API enables users to register, log in, publish posts, read posts, edit posts, and delete posts.

## Key Features

- **User Registration**: Allows users to register on the platform.
- **User Login**: Allows users to log in to the platform.
- **Post Publishing**: Allows users to publish posts on the platform.
- **Post Editing**: Allows users to edit published posts on the platform.
- **Post Deletion**: Allows users to delete published posts on the platform.

## API Endpoints

- **For users**

  - `POST /user`: Register a new user.
  - `GET /user`: Get all users.
  - `GET /user/:id`: Get user by id.
  - `POST /auth/login`: Sign in with email and password.

- **For posts**
  - `POST /posts`: Publish a new article.
  - `GET /posts`: Get all articles.
  - `GET /posts/:id`: Get article by id.
  - `GET /posts/search`: Search articles by title.
  - `DELETE /posts/:id`: Delete article by id.
  - `patch /posts/:id`: Update article by id.

## Installation

1. Clone this repository to your local machine.
2. Navigate to the project directory:

```
cd reto-backend
```

3. Install project dependencies:

```
npm install
```

4. Configure environment variables in a `.env` file following the example in the `.env.example` file.
5. Start the server locally:

```
npm start
```

6. Start the server in development mode:

```
npm run dev
```

## Technologies Used

- **Node.js**: as the main execution environment.
- **Express.js**: as the web framework for building the API.
- **MongoDB**: as the database for storing student, course, and task data.
- **Mongoose**: as the Object-Document Mapping (ODM) to interact with the MongoDB database.
- **JSON Web Tokens (JWT)**: as the authentication and authorization mechanism for users.
- **Bcrypt**: as the encryption algorithm for securely storing user passwords.
- **Dotenv**: as the module for loading environment variables from a `.env` file.
- **Cors**: as the middleware for enabling resource sharing between different domains.
- **Nodemon**: as the tool for automatically restarting the Node.js application when changes in the source code are detected.
- **http-errors**: as the utility for creating HTTP errors.
