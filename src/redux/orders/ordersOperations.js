import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const API__KEY = '01fd7ec6f6b3fdecb11b0163020681c2';
const URL = 'https://api.novaposhta.ua/v2.0/json/';

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
      const { data } = await axios.post(URL, request);
      if (data.data.length === 0) {
        toast.warning('Замовлення з таким номером не існує');
        return;
      }
      const {Status,WarehouseRecipientAddress,WarehouseSenderAddress,Number} = data.data[0];
      return {
        Status,
        WarehouseRecipientAddress,
        WarehouseSenderAddress,
        Number,
      };
    
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
