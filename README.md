# Song Management Fullstack Application

## Overview

The **Song Management Fullstack Application** is a comprehensive solution for managing songs, built with a modern technology stack. The project includes both a frontend application and a backend API, enabling users to perform CRUD operations on songs, view song statistics, and apply various filters.

- **Frontend**: A React-based application using TypeScript, Redux Toolkit, Redux-Saga, Emotion, and Styled System.
- **Backend**: A Node.js and Express API, utilizing MongoDB for data storage.

## Features

### Frontend

- **View Songs**: List all songs fetched from the backend API.
- **Add New Songs**: Add new songs using a modal-based form.
- **Edit Songs**: Edit existing songs in a modal.
- **Delete Songs**: Delete songs with confirmation in a modal.
- **Filter Songs**: Filter songs by genre, artist, and album.
- **View Statistics**: View real-time statistics for songs.
- **Responsive Design**: Adapts to various screen sizes.

### Backend

- **View Songs**: List all songs stored in the database.
- **Add New Songs**: Add new songs to the database.
- **Edit Songs**: Update existing song details.
- **Delete Songs**: Remove songs from the database.
- **View Statistics**: Retrieve statistics such as total songs, total albums, and songs grouped by genre.
- **RESTful API**: Follows REST principles.

## Project Structure

```
song-management-fullstack/
├── song-management-frontend/
│   ├── src/
│   │   ├── api/                 # API calls for song management
│   │   ├── components/          # React components
│   │   ├── sagas/               # Redux-Saga side effects
│   │   ├── slices/              # Redux slices for state management
│   │   ├── store/               # Redux store configuration
│   │   ├── types/               # TypeScript types and interfaces
│   │   ├── App.tsx              # Main application component
│   │   └── index.tsx            # Entry point for React app
│   ├── Dockerfile               # Docker configuration file for frontend
│   ├── package.json             # Frontend dependencies and scripts
│   └── README.md                # Documentation for the frontend
│
└── song-management-backend/
    ├── controllers/             # Handles requests and responses
    ├── models/                  # Database models (e.g., Mongoose schemas)
    ├── routes/                  # API routes for backend
    ├── services/                # Business logic and service layer
    ├── Dockerfile               # Docker configuration file for backend
    ├── package.json             # Backend dependencies and scripts
    ├── server.js                # Entry point of the backend application
    └── README.md                # Documentation for the backend
```


## Installation and Running

### Prerequisites

- Node.js (version 18 or later)
- MongoDB (for the backend)

### Frontend

1. **Navigate to the frontend directory**:
    ```bash
    cd song-management-frontend
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Run the application in development mode**:
    ```bash
    npm start
    ```
   The frontend will be available at `http://localhost:3000`.

### Backend

1. **Navigate to the backend directory**:
    ```bash
    cd song-management-backend
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory and add the following configuration:
    ```bash
    MONGODB_URI=<your-mongodb-connection-string>
    PORT=5000
    ```

4. **Start the backend server**:
    ```bash
    node server.js
    ```
   The backend API will be available at `http://localhost:5000`.

## API Endpoints

- **Songs**:
  - **GET** `/api/songs`: Retrieve all songs
  - **GET** `/api/songs/:id`: Retrieve a specific song by ID
  - **POST** `/api/songs`: Create a new song
  - **PUT** `/api/songs/:id`: Update an existing song by ID
  - **DELETE** `/api/songs/:id`: Delete a song by ID

- **Statistics**:
  - **GET** `/api/statistics`: Retrieve song statistics

## Contributions

Feel free to contribute by creating pull requests or submitting issues.

## License

This project is licensed under the MIT License.
