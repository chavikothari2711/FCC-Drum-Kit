import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  text: ""
};

const textSlice = createSlice({
  name: "text",
  initialState,
  reducers: {
    change: (state, action) => {
      state.text = action.payload;
    }
  }
});

export default textSlice.reducer;
export const { change } = textSlice.actions;
