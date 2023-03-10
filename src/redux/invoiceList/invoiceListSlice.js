import { createSlice } from '@reduxjs/toolkit';
import { fetchInvoiceList, deleteOrder } from './invoiceListOperations';

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
      })
      .addCase(fetchInvoiceList.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchInvoiceList.rejected, (state, { payload }) => {
        // console.log(payload);
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(deleteOrder.fulfilled, (state, { payload }) => {
        // console.log('payload in delete in full', payload);
        state.list = state.list.filter(item => item.Ref !== payload);
      })
      .addCase(deleteOrder.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteOrder.rejected, (state, { payload }) => {
        // console.log(payload);
        state.isLoading = false;
        state.error = payload;
      });
  },
});
export default invoiceListSlice.reducer;
