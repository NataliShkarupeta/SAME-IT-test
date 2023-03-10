// import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
const API__KEY = '01fd7ec6f6b3fdecb11b0163020681c2';
const URL = 'https://api.novaposhta.ua/v2.0/json/';
// axios.defaults.baseURL = 'https://api.novaposhta.ua/v2.0/json/';

export const fetchInvoiceList = createAsyncThunk(
  'invoiceList/fetchAll',
  async (_, { rejectWithValue }) => {
    const request = {
      apiKey: API__KEY,
      modelName: 'InternetDocument',
      calledMethod: 'getDocumentList',
      methodProperties: {
        DateTimeFrom: '01.01.2022',
        // DateTimeTo: 'дд.мм.рррр',
        Page: '1',
        GetFullList: '1',
        // DateTime: 'дд.мм.рррр',
      },
    };

    try {
      const response = await fetch(URL, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *client
        body: JSON.stringify(request), // body data type must match "Content-Type" header
      });
      const data = await response.json();
      console.log('data ', data.data);
      return data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteOrder = createAsyncThunk(
  'order/deleteOrder',
  async (id, { rejectWithValue }) => {
    console.log('id', id);
    const request = {
      apiKey: API__KEY,
      modelName: 'InternetDocument',
      calledMethod: 'delete',
      methodProperties: {
        DocumentRefs: `${id}`,
      },
    };

    try {
      const response = await fetch(URL, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *client
        body: JSON.stringify(request), // body data type must match "Content-Type" header
      });
      await response.json();
    //   const data = await response.json();
    //   if (!data.success) {
    //     throw new Error(response.status);
    //   } 
        return id;
      
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

