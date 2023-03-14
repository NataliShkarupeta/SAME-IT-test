import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import pointsReduser from './points/pointsSlice';
import ordersReduser from './orders/ordersSlice';
import invoiceListReduser from './invoiceList/invoiceListSlice';
import toggleReduser from './allrequests/allrequestsSlice';

const persistConfig = {
  key: 'invoiceList',
  storage,
  whitelist: ['list'],
};

export const reducer = combineReducers({
  globalTheme: toggleReduser,
  points: pointsReduser,
  orders: ordersReduser,
  invoiceList: persistReducer(persistConfig, invoiceListReduser),
});


