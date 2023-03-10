import { createSlice} from '@reduxjs/toolkit';
import { fetchAllPoints } from './pointsOperations';

const pointsSlice = createSlice({
  name: 'points',
  initialState: {
    points: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchAllPoints.fulfilled, (state, { payload }) => {
        // console.log('payload', payload);
        state.points.push(...payload);
      })
      .addCase(fetchAllPoints.pending, (state) => {
        state.isLoading=true;
      })
      .addCase(fetchAllPoints.rejected, (state, { payload }) => {
        console.log(payload)
        state.isLoading=  false;
        state.error = payload
      });
  },
});
export default pointsSlice.reducer;
