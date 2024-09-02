import axios from 'axios';
import { Song } from '../types/song';

const api = axios.create({
  baseURL: 'https://song-management-backend-b8wh.onrender.com/api',
});

export const fetchSongs = () => api.get<Song[]>('/songs');
export const fetchSongById = (id: string) => api.get<Song>(`/songs/${id}`);
export const createSong = (songData: Song) => api.post('/songs', songData);
export const updateSong = (id: string, songData: Song) => api.put(`/songs/${id}`, songData);
export const deleteSong = (id: string) => api.delete(`/songs/${id}`);
export const fetchStatistics = () => api.get('/statistics');
