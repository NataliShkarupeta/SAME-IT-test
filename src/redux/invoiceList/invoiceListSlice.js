import { createSlice } from '@reduxjs/toolkit';
import { fetchInvoiceList } from './invoiceListOperations';

const invoiceListSlice = createSlice({
  name: 'invoiceList',
  initialState: {
    list: [
      {
        Status: 'Відправлення отримано. ',
        Number: '20450661283166',
        WarehouseRecipient: 'Відділення №27 (до 10 кг): вул. Низинна, 2',
        WarehouseSender:
          'Відділення №3 (до 30 кг на одне місце): вул. Залізнична, 45',
      },
      {
        Status: 'Відправлення отримано. Грошовий переказ видано одержувачу.',
        Number: '20450661283166',
        WarehouseRecipient: 'Відділення №27 (до 10 кг): вул. Низинна, 2',
        WarehouseSender:
          'Відділення №3 (до 30 кг на одне місце): вул. Залізнична, 45',
      },
    ],
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchInvoiceList.fulfilled, (state, { payload }) => {
        console.log('list', state.isLoading);
        console.log('paylo', payload);
        state.list.push(...payload);
      })
      .addCase(fetchInvoiceList.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchInvoiceList.rejected, (state, { payload }) => {
        // console.log(payload);
        state.isLoading = false;
        state.error = payload;
      });
  },
});
export default invoiceListSlice.reducer;
