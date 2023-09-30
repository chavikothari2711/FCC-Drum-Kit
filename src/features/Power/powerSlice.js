import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  power: true
};

const powerSlice = createSlice({
  name: "power",
  initialState,
  reducers: {
    powerChange: (state, action) => {
      state.power = action.payload;
    }
  }
});

export default powerSlice.reducer;
export const { powerChange } = powerSlice.actions;
