// import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
const API__KEY = '01fd7ec6f6b3fdecb11b0163020681c2';
const URL = 'https://api.novaposhta.ua/v2.0/json/';
// axios.defaults.baseURL = 'https://api.novaposhta.ua/v2.0/json/';

export const fetchLocationOrder = createAsyncThunk(
  'order/fetchLocation',
  async (num, { rejectWithValue }) => {
    const request = {
      apiKey: API__KEY,
      modelName: 'TrackingDocument',
      calledMethod: 'getStatusDocuments',
      methodProperties: {
        Documents: [
          {
            DocumentNumber: `${num}`,
          },
        ],
      },
    };

    try {
      const response = await fetch(URL, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        // mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *client
        body: JSON.stringify(request), // body data type must match "Content-Type" header
      });
      //  .then(response => {
      //       return response.json();
      //     })
      //     .then(data => {
      //       console.log('data fetch', data.data[0]);
      //       return data.data[0];
      //     });
      const data = await response.json();
      console.log('data fetch', data);
      return data.data[0];
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
