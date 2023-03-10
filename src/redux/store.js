import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
// import {
//   persistStore,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
import { reducer } from './reducer';

export const store = configureStore({
  reducer: reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
//  export default store;
export const persistor = persistStore(store);
