import { configureStore } from "@reduxjs/toolkit";
import textReducer from "../features/Text/textSlice";
import volumeReducer from "../features/Volume/volumeSlice";
import powerReducer from "../features/Power/powerSlice";

const store = configureStore({
  reducer: {
    text: textReducer,
    volume: volumeReducer,
    power: powerReducer
  }
});

export default store;
