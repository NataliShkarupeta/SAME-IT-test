import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
const API__KEY = '01fd7ec6f6b3fdecb11b0163020681c2';

axios.defaults.baseURL = 'https://api.novaposhta.ua/v2.0/json/';
