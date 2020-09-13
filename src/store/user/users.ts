import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
const INITIAL_STATE = {
  currentUser: null,
};

const slice = createSlice({
  name: "users",
  initialState: INITIAL_STATE,
  reducers: {
    logUserIn: (user, action) => {
      user.currentUser = action.payload;
    },
  },
});

export const { logUserIn } = slice.actions;
export const getCurrentUser = createSelector(
  (state: any) => state.user,
  (user: any) => user.currentUser
);
export default slice.reducer;
