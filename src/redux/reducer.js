import { combineReducers } from '@reduxjs/toolkit';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import pointsSlice from './points/pointsSlice';

// const persistConfig = {
//   key: 'user',
//   storage,
//   whitelist: ['token'],
// };

export const reducer = combineReducers({
  points: pointsSlice,
});
