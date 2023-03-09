import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// const API__KEY = '01fd7ec6f6b3fdecb11b0163020681c2';

axios.defaults.baseURL = 'https://api.novaposhta.ua/v2.0/json/';

export const fetchAllPoints = createAsyncThunk(
  'points/fetchAll',
  async (_, { rejectWithValue }) => {
    // const request = {
    //   'apiKey': API__KEY,
    //   'modelName': 'Address',
    //   'calledMethod': 'getWarehouses',
    //   'methodProperties': {
    //     'CityName': 'Київ',
    //   },
    // };
    const config = {
      params: {
        "apiKey": "01fd7ec6f6b3fdecb11b0163020681c2",
	    "modelName": "Address",
	    "calledMethod": "getWarehouses",
	    "methodProperties": {"CityName":"Київ"}
      ,
        headers: {
          'Content-Type': 'application/json',
        },
      },
    };
    try {
      const res = await axios.get(_, config);
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
