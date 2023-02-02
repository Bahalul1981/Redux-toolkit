import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const creatSlice = createSlice({
  name: "Arvid",
  initialState,
  reducers: {
    defaultState: (state) => {
      state = state.value;
    },

    newState: (state) => {
      state.value = state.value + 20;
    },
    dfsgdsjgh: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { defaultState, newState, dfsgdsjgh } = creatSlice.actions;

export default creatSlice.reducer;
