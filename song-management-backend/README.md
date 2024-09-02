# Song Management Backend API

## Overview

This project is a **backend API** for managing songs. The API allows users to perform CRUD (Create, Read, Update, Delete) operations on songs and provides statistics about songs, including the total number of songs, total albums, and songs by genre. The application is built using **Node.js**, **Express**, and **MongoDB** for the database. The application is also containerized using Docker.

## Features

- **View Songs**: List all songs stored in the database.
- **Add New Songs**: Add new songs to the database.
- **Edit Songs**: Update existing song details.
- **Delete Songs**: Remove songs from the database.
- **View Statistics**: View statistics such as total songs, total albums, total artists, and songs grouped by genre.
- **RESTful API**: The API follows REST principles.

## Project Structure

```
├── controllers/
│   └── songsController.js   # Handles requests and responses
│
├── models/
│   └── song.js              # Mongoose schema for songs
│
├── routes/
│   └── songRoutes.js        # API routes for songs and statistics
│
├── services/
│   └── songService.js       # Business logic for song operations
│
├── server.js                # Entry point of the application
├── Dockerfile               # Docker configuration file
├── package.json             # Project dependencies and scripts
└── .env                     # Environment variables (create your own)
```



## Dependencies

- **Express**: Web framework for Node.js
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js
- **dotenv**: Loads environment variables from a `.env` file
- **cors**: Middleware for enabling CORS (Cross-Origin Resource Sharing)
- **Docker**: Containerization platform for running the application in isolated environments

## Installation

1. **Clone the repository**:
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up environment variables**:

   Create a `.env` file in the root directory and configure the following variables:

    ```bash
    MONGODB_URI=<your-mongodb-connection-string>
    PORT=5000
    ```

4. **Start the application**:
    ```bash
    node server
    ```

The server will start on `http://localhost:5000`.

## API Endpoints

### Song Routes

- **GET** `/api/songs`: Retrieve all songs
- **GET** `/api/songs/:id`: Retrieve a specific song by its ID
- **POST** `/api/songs`: Create a new song
- **PUT** `/api/songs/:id`: Update an existing song by its ID
- **DELETE** `/api/songs/:id`: Delete a song by its ID

### Statistics Routes

- **GET** `/api/statistics`: Retrieve statistics about the songs, including the total number of songs, artists, albums, and genres, as well as grouping data.

## Dockerization

To run the application using Docker, follow these steps:

1. **Create a Dockerfile**:

    ```Dockerfile
    # Use the official Node.js image
    FROM node:20-alpine

    # Set the working directory inside the container
    WORKDIR /usr/src/app

    # Copy package.json and package-lock.json to the working directory
    COPY package*.json ./

    # Install dependencies
    RUN npm install

    # Copy the rest of the application code to the working directory
    COPY . .

    # Expose the port the app runs on
    EXPOSE 5000

    # Command to run the app
    CMD ["node", "server.js"]
    ```

2. **Build the Docker image**:
    ```bash
    docker build -t song-management-api .
    ```

3. **Run the Docker container**:
    ```bash
    docker run -p 5000:5000 song-management-api
    ```

The API will now be available at `http://localhost:5000`.

## Contributions

Feel free to contribute by creating pull requests or submitting issues.

## License

This project is licensed under the MIT License.
