
# Song Management Frontend Application

## Overview

This project is a **frontend application** for managing songs. The application allows users to perform CRUD (Create, Read, Update, Delete) operations on songs and provides a way to filter songs by genre, artist, and album. Additionally, users can view song statistics, like, total songs, total albums and songs by genre. The application is built using **React**, **TypeScript**, **Redux Toolkit**, **Redux-Saga**, **Emotion**, and **Styled System** for styling.

## Features

- **View Songs**: List all songs fetched from the backend API.
- **Add New Songs**: Add new songs using a modal-based form.
- **Edit Songs**: Edit existing songs in a modal.
- **Delete Songs**: Delete songs with confirmation in a modal.
- **Filter Songs**: Filter songs by genre, artist, and album.
- **View Statistics**: View real-time statistics for songs.
- **Responsive Design**: The application adapts well to different screen sizes.

## Project Structure

```
src/
│
├── api/
│   └── api.ts          # Axios requests to backend API
│
├── components/
│   ├── SongForm.tsx    # Song form component for adding and editing songs
│   ├── SongsList.tsx   # Component to display and manage the list of songs
│   ├── Statistics.tsx  # Component to display song statistics
│   └── StyledComponents.ts # Styled components using Emotion and Styled System
│
├── sagas/
│   ├── songsSaga.ts    # Redux-Saga to handle songs-related side effects
│   └── statisticsSaga.ts # Redux-Saga to handle statistics-related side effects
│
├── slices/
│   ├── songsSlice.ts   # Redux slice for song-related actions and reducers
│   └── statisticsSlice.ts # Redux slice for statistics-related actions and reducers
│
├── store/
│   └── store.ts        # Redux store configuration with Saga middleware
│
├── types/
│   └── song.ts         # TypeScript types for Song and Statistics
│
├── App.tsx             # Root component of the application
└── index.tsx           # Entry point of the application
```

## Dependencies

- **React**: JavaScript library for building user interfaces
- **TypeScript**: Type-safe JavaScript
- **Redux Toolkit**: Predictable state container for JavaScript apps
- **Redux-Saga**: Middleware for handling side effects in Redux applications
- **Axios**: Promise-based HTTP client for making API requests
- **Emotion & Styled System**: For styling React components with theme-based system support

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-repo/song-management-frontend.git
    cd song-management-frontend
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

## Running the Application

To run the application in development mode:

```bash
npm start
```

The application will start on `http://localhost:3000`.

Make sure you have the **backend API** running on `http://localhost:5000` or any chosen port. The frontend is configured to communicate with the backend via the following endpoints:
- `/api/songs` for fetching, creating, updating, and deleting songs
- `/api/statistics` for fetching statistics

## Redux State Management

- **Songs Slice**: Manages the state for fetching, creating, updating, and deleting songs.
- **Statistics Slice**: Manages the state for fetching song statistics.

## Sagas

- **Songs Saga**: Handles asynchronous side effects for fetching, creating, updating, and deleting songs.
- **Statistics Saga**: Handles asynchronous side effects for fetching statistics.

## Styling

The application uses **Emotion** for styling components, with **Styled System** for managing responsive design, theming, and spacing.

## Contributions

Feel free to contribute by creating pull requests or submitting issues.

## License

This project is licensed under the MIT License.
