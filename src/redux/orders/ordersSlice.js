import { createSlice } from '@reduxjs/toolkit';
import { fetchLocationOrder } from './ordersOperations';

const pointsSlice = createSlice({
  name: 'orders',
  initialState: {
    order: null,
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchLocationOrder.fulfilled, (state, {payload}) => {
        state.isLoading = false;
        state.order = payload;
        state.error = null;
      })
      .addCase(fetchLocationOrder.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchLocationOrder.rejected, (state, { payload }) => {
       
        state.isLoading = false;
        state.error = payload;
      });
  },
});
export default pointsSlice.reducer;
