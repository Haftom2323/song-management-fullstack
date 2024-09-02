import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';


import songsReducer from '../slices/songsSlice'
import statisticsReducer from '../slices/statisticsSlice';


import songsSaga from '../sagas/songsSaga';
import statisticsSaga from '../sagas/statisticsSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    songs: songsReducer,
    statistics: statisticsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false,
    }).concat(sagaMiddleware),
});


sagaMiddleware.run(songsSaga);
sagaMiddleware.run(statisticsSaga);


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
