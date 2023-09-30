import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  volume: 10
};

const volumeSlice = createSlice({
  name: "volume",
  initialState,
  reducers: {
    alter: (state, action) => {
      state.volume = action.payload;
    }
  }
});

export default volumeSlice.reducer;
export const { alter } = volumeSlice.actions;
