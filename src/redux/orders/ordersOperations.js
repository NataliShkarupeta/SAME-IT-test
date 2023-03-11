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
        method: 'POST',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(request),
      });

      const data = await response.json();
      // console.log('data fetch', data);
      return data.data[0];
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
