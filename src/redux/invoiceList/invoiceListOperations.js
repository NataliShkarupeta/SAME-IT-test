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
        Page: '1',
        GetFullList: '1',
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
      // console.log('data ', data.data);
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
        method: 'POST', 
        cache: 'no-cache', 
        credentials: 'same-origin', 
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer', 
        body: JSON.stringify(request), 
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

