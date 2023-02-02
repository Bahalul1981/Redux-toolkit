import { configureStore } from "@reduxjs/toolkit";
import defaultState from "./slicer/slicer";
export const store = configureStore({
  reducer: {
    show: defaultState,
  },
});
