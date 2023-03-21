import { createSlice } from '@reduxjs/toolkit';


const globalTheme = createSlice({
  name: 'globalTheme',
  initialState: {
    theme: true,
   
  },
  reducers: {
    toggleTheme(state) {
      state.theme = !state.theme;
    },
  },


  
});
export const { toggleTheme } = globalTheme.actions;
export default globalTheme.reducer;
