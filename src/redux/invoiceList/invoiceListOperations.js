import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
const API__KEY = '01fd7ec6f6b3fdecb11b0163020681c2';
const URL = 'https://api.novaposhta.ua/v2.0/json/';

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
      const { data } = await axios.post(URL, request);
      if (data.data.length === 0) {
        toast.warning(
          'В даному в особистому кабінеті ще не створено одного завмовлення!'
        );
      }
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
      await axios.post(URL, request);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
