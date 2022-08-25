import { createSlice } from "@reduxjs/toolkit";
import { IResetResponse } from "shared/interfaces";

export interface UserState {
  isLogged: boolean;
  userData: IResetResponse;
}

const initialState = { isLogged: false, userData: {} };

export const slice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUser(state, { payload }) {
      return { ...state, isLogged: true, userData: payload };
    },
    logout(state) {
      return {
        ...state,
        isLogged: false,
        userData: {},
      };
    },
  },
});

export const { setUser, logout } = slice.actions;

export const selectUser = (state: { user: UserState }) => state.user;

export default slice.reducer;
