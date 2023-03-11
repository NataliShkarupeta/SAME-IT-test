import { createSlice } from '@reduxjs/toolkit';
import { fetchAllPoints } from './pointsOperations';

const pointsSlice = createSlice({
  name: 'points',
  initialState: {
    points: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    resetPoints(state, { payload }) {
      state.points = payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchAllPoints.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.points.push(...payload);
         state.error = null;

      })
      .addCase(fetchAllPoints.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchAllPoints.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});
export const { resetPoints } = pointsSlice.actions;
export default pointsSlice.reducer;
