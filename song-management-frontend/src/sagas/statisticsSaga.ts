import { call, put, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { fetchStatistics } from '../api/api';
import {
  fetchStatisticsStart,
  fetchStatisticsSuccess,
  fetchStatisticsFailure
} from '../slices/statisticsSlice';
import { Statistics } from '../types/song';


function* fetchStatisticsSaga(): Generator<any, void, AxiosResponse<Statistics>> {
  try {
    const response = yield call(fetchStatistics);
    yield put(fetchStatisticsSuccess(response.data));
  } catch (error) {
    yield put(fetchStatisticsFailure('Failed to fetch statistics'));
  }
}

export default function* statisticsSaga() {
  yield takeLatest(fetchStatisticsStart.type, fetchStatisticsSaga);
}
