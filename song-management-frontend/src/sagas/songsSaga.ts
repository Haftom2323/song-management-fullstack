import { call, put, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { fetchSongs, createSong, updateSong, deleteSong } from '../api/api';
import {
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
} from '../slices/songsSlice';
import { fetchStatisticsStart } from '../slices/statisticsSlice';
import { Song } from '../types/song';

interface SongsResponse {
  songs: Song[];
  totalSongs: number;
  currentPage: number;
  totalPages: number;
}

function* fetchSongsSaga(action: ReturnType<typeof fetchSongsStart>): Generator<any, void, AxiosResponse<SongsResponse>> {
  try {
    const { page, limit } = action.payload;
    const response = yield call(fetchSongs, page, limit); 
    // console.log("response: ", response.data);

    const { songs, totalSongs, currentPage, totalPages } = response.data;
    yield put(fetchSongsSuccess({ songs, totalSongs, currentPage, totalPages }));
  } catch (error) {
    yield put(fetchSongsFailure('Failed to fetch songs'));
  }
}

function* createSongSaga(action: ReturnType<typeof createSongStart>): Generator<any, void, AxiosResponse<Song>> {
  try {
    const response = yield call(createSong, action.payload);
    yield put(createSongSuccess(response.data));

    yield put(fetchStatisticsStart());
  } catch (error) {
    yield put(createSongFailure('Failed to create song'));
  }
}

function* updateSongSaga(action: ReturnType<typeof updateSongStart>): Generator<any, void, AxiosResponse<Song>> {
  try {
    const response = yield call(updateSong, action.payload.id, action.payload.data);
    yield put(updateSongSuccess(response.data));
  } catch (error) {
    console.error(error);
  }
}

function* deleteSongSaga(action: ReturnType<typeof deleteSongStart>): Generator<any, void, void> {
  try {
    yield call(deleteSong, action.payload);
    yield put(deleteSongSuccess(action.payload));

    yield put(fetchStatisticsStart());
  } catch (error) {
    console.error(error);
  }
}

export default function* songsSaga() {
  yield takeLatest(fetchSongsStart.type, fetchSongsSaga);
  yield takeLatest(createSongStart.type, createSongSaga);
  yield takeLatest(updateSongStart.type, updateSongSaga);
  yield takeLatest(deleteSongStart.type, deleteSongSaga);
}
