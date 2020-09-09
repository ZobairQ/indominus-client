import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {};

const slice = createSlice({
  name: "users",
  initialState: INITIAL_STATE,
  reducers: {
    logUserInd: (state, action) => {},
  },
});

export const { logUserInd } = slice.actions;

export default slice.reducer;
