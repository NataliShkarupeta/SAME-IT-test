import axios from 'axios';
import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit';
const API__KEY = '01fd7ec6f6b3fdecb11b0163020681c2';
const URL = 'https://api.novaposhta.ua/v2.0/json/';

export const fetchAllPoints = createAsyncThunk(
  'points/fetchAll',
  async ({ city, page }, { rejectWithValue }) => {
    console.log(city, page);
    const request = {
      apiKey: API__KEY,
      modelName: 'Address',
      calledMethod: 'getWarehouses',
      methodProperties: {
        CityName: `${city}`,
        Limit: '50',
        page: `${page}`,
      },
    };

    try {
      const { data } = await axios.post(URL, request);
      if (data.data.length === 0) {
        toast.warning('Ой, таке місто нам не відоме!!!');
      }

      return data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
