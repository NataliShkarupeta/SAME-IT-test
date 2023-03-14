import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchInvoiceList, deleteOrder } from './invoiceListOperations';

const setError = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const setPending = state => {
  state.isLoading = true;
};
const extraActions = [fetchInvoiceList, deleteOrder];
const createActions = type => {
  return extraActions.map(action => action[type]);
};

const invoiceListSlice = createSlice({
  name: 'invoiceList',
  initialState: {
    list: [
      {
        StateName: 'Відправлення отримано. ',
        IntDocNumber: '20450661283166',
        CityRecipient: 'Відділення №27 (до 10 кг): вул. Низинна, 2',
        CitySender:
          'Відділення №3 (до 30 кг на одне місце): вул. Залізнична, 45',
        Ref: 'c680873b-a700-11ed-a361-48df37b92096',
      },
      {
        StateName: 'Відправлення отримано. Грошовий переказ видано одержувачу.',
        IntDocNumber: '59000908808835',
        CityRecipient: '"Одеса, Фонтанська дорога, 14а"',
        CitySender: 'Львів, Низинна, 2',
        Ref: 'db5c88f5-391c-11dd-90d9-001a92567626',
      },
      {
        StateName: 'Відправлення отримано. Грошовий переказ видано одержувачу.',
        IntDocNumber: '20400320621837',
        CityRecipient: '',
        CitySender: 'Дніпро, Робоча, 148',
        Ref: '841339c7-591a-42e2-8233-7a0a00f0ed6f',
      },
    ],
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchInvoiceList.fulfilled, (state, { payload }) => {
        state.list.push(...payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteOrder.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.list = state.list.filter(item => item.Ref !== payload);
        state.error = payload;
      })
      .addMatcher(isAnyOf(...createActions('pending')), setPending)
      .addMatcher(isAnyOf(...createActions('rejected')), setError);
  },
});
export default invoiceListSlice.reducer;
