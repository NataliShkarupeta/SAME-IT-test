import { createSlice } from '@reduxjs/toolkit';


const globalTheme = createSlice({
  name: 'globalTheme',
  initialState: {
    theme: false,
   
  },
  reducers: {
    toggleTheme(state) {
        // console.log('payload', payload);
      state.theme = !state.theme;
    },
  },


  
});
export const { toggleTheme } = globalTheme.actions;
export default globalTheme.reducer;
