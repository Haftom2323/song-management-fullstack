import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Song } from '../types/song';

interface SongState {
  songs: Song[];
  totalSongs: number;
  currentPage: number;
  totalPages: number;
  loading: boolean;
  error: string | null;
}

const initialState: SongState = {
  songs: [],
  totalSongs: 0,
  currentPage: 0,
  totalPages: 0,
  loading: false,
  error: null,
};

const songSlice = createSlice({
  name: 'songs',
  initialState,
  reducers: {
    fetchSongsStart(state, action: PayloadAction<{ page: number; limit: number }>) {
      state.loading = true;
    },
    fetchSongsSuccess(state, action: PayloadAction<{
      songs: Song[];
      totalSongs: number;
      currentPage: number;
      totalPages: number;
    }>) {
      const { songs, totalSongs, currentPage, totalPages } = action.payload;
      state.songs = Array.isArray(songs) ? songs : [];
      state.totalSongs = totalSongs;
      state.currentPage = currentPage;
      // console.log("current page in slice: ", currentPage)
      state.totalPages = totalPages;
      state.loading = false;
    },
    fetchSongsFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.loading = false;
    },
    createSongStart(state, action: PayloadAction<Song>) { },
    createSongSuccess(state, action: PayloadAction<Song>) {
      state.songs = [...state.songs, action.payload];
    },
    createSongFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.loading = false;
    },
    updateSongStart(state, action: PayloadAction<{ id: string; data: Song }>) { },
    updateSongSuccess(state, action: PayloadAction<Song>) {
      const index = state.songs.findIndex(song => song._id === action.payload._id);
      if (index !== -1) state.songs[index] = action.payload;
    },
    deleteSongStart(state, action: PayloadAction<string>) { },
    deleteSongSuccess(state, action: PayloadAction<string>) {
      state.songs = state.songs.filter(song => song._id !== action.payload);
    },
  },
});

export const {
  fetchSongsStart,
  fetchSongsSuccess,
  fetchSongsFailure,
  createSongStart,
  createSongSuccess,
  createSongFailure,
  updateSongStart,
  updateSongSuccess,
  deleteSongStart,
  deleteSongSuccess,
} = songSlice.actions;

export default songSlice.reducer;
