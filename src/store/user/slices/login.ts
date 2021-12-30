import { createSlice } from "@reduxjs/toolkit";

interface IState {
  isLoading: boolean;
  isAuth: boolean;
  error: any;
}

const initialState: IState = {
  isLoading: false,
  isAuth: false,
  error: null,
};

export const userLogin = createSlice({
  name: "user/login",
  initialState,
  reducers: {
    start: (state) => ({
      ...state,
      isLoading: true,
    }),
    success: (state) => ({
      ...state,
      isAuth: true,
    }),
    error: (state, { payload }) => ({
      ...state,
      error: payload,
    }),
    stop: (state) => ({
      ...state,
      isLoading: false,
    }),
  },
});

export const { start, success, error, stop } = userLogin.actions;
export default userLogin.reducer;
