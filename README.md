
# Linktree Backend

This repository contains the backend code for the Linktree project. The backend is built using Node.js, Express, and MongoDB. It provides the necessary APIs for user authentication and managing personalized collections of links.

## Features

- **User Authentication**: Sign up and sign in functionality.
- **Link Management**: Create, read, update, and delete links associated with a user.
- **JWT Authentication**: Secure endpoints with JSON Web Tokens.
- **MongoDB Integration**: Store user and link data in a MongoDB database.

## Getting Started

Follow these steps to set up the backend server on your local machine.

### Prerequisites

Make sure you have the following installed:

- Node.js (>=14.x)
- npm or yarn
- MongoDB Atlas account (for online MongoDB)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Shivam6393/linktree_backend.git
   cd linktree_backend
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env` file in the root directory and add the following environment variables:
   ```
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. The server will start on `http://localhost:5000`.

## Folder Structure

```
linktree-clone-backend/
├── config/
│   └── db.js
├── controllers/
│   ├── authController.js
│   └── linkController.js
├── middleware/
│   └── authMiddleware.js
├── models/
│   ├── Link.js
│   └── User.js
├── routes/
│   ├── authRoutes.js
│   └── linkRoutes.js
├── .env
├── server.js
├── package.json
├── README.md
└── ...
```

## Technologies Used

- **Node.js**: JavaScript runtime for building the backend.
- **Express**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing user and link data.
- **Mongoose**: ODM for MongoDB and Node.js.
- **JWT**: JSON Web Tokens for authentication.
- **Cors**: Middleware for enabling Cross-Origin Resource Sharing.

## API Endpoints

### User Authentication

- **Register User**
  - **URL**: `/api/users/register`
  - **Method**: `POST`
  - **Description**: Register a new user.
  - **Body Parameters**:
    ```json
    {
      "email": "shivamtiwari6223@gmail.com",
      "password": "shivam@345"
    }
    ```

- **Login User**
  - **URL**: `/api/users/login`
  - **Method**: `POST`
  - **Description**: Authenticate a user and get a token.
  - **Body Parameters**:
    ```json
    {
      "email": "shivamtiwari6223@gmail.com",
      "password": "shivam@345"
    }
    ```

### Link Management

- **Get User Links**
  - **URL**: `/:email`
  - **Method**: `GET`
  - **Description**: Get all links associated with a user.
  - **Headers**:
    ```json
    {
      "Authorization": "Bearer token"
    }
    ```

- **Create Link**
  - **URL**: `/api/links`
  - **Method**: `POST`
  - **Description**: Create a new link.
  - **Headers**:
    ```json
    {
      "Authorization": "Bearer token"
    }
    ```
  - **Body Parameters**:
    ```json
    {
      "title": "My Blog",
      "url": "https://myblog.com"
    }
    ```


- **Delete Link**
  - **URL**: `/:id`
  - **Method**: `DELETE`
  - **Description**: Delete a link.
  - **Headers**:
    ```json
    {
      "Authorization": "Bearer token"
    }
    ```
