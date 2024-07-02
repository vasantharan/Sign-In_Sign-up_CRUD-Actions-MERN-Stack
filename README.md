# Sign-In/Sign-Up CRUD Actions - MERN Stack

## Overview

This project demonstrates a basic Sign-In/Sign-Up system using the MERN stack (MongoDB, Express.js, React.js, Node.js). It includes CRUD operations for user management.

## Features

- User authentication (Sign-In/Sign-Up)
- Protected routes
- CRUD operations for user data

## Prerequisites

- Node.js and npm
- MongoDB

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/vasantharan/Sign-In_Sign-up_CRUD-Actions-MERN-Stack.git
    cd Sign-In_Sign-up_CRUD-Actions-MERN-Stack
    ```

2. Install dependencies for both backend and frontend:
    ```bash
    cd backend
    npm install
    cd ../frontend
    npm install
    ```

3. Create a `.env` file in the `backend` directory and add the following:
    ```
    db_url=<your_mongo_db_uri>
    jwt_secret=<your_jwt_secret>
    ```

## Running the Application

1. Start the backend server:
    ```bash
    cd backend
    nodemon server.js
    ```

2. Start the frontend server:
    ```bash
    cd frontend
    npm start
    ```

3. Open your browser and navigate to `http://localhost:3000`.

## Project Structure

### Backend

- `controller.js`: Handles the business logic for authentication and user management.
- `route.js`: Defines the API routes.
- `schema.js`: Contains the MongoDB schema for the user.
- `server.js`: Sets up the Express server.
- `middleware/auth.js`: Middleware for protecting routes.

### Frontend

- `src/components`: React components for sign-in and sign-up.
- `src/pages`: React pages for home, sign-in, sign-up, and data display.
- `src/api.js`: Handles API calls to the backend.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries, please contact the repository owner at [vasantharan](https://github.com/vasantharan).
