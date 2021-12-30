import { createSlice } from "@reduxjs/toolkit";

interface IState {
  isLoading: boolean;
  error: any;
  data: { [key: string]: any };
}

const initialState: IState = {
  isLoading: false,
  error: null,
  data: {},
};

export const userRegister = createSlice({
  name: `user/register`,
  initialState,
  reducers: {
    start: (state) => ({
      ...state,
      isLoading: true,
    }),
    success: (state, { payload }) => ({
      ...state,
      data: payload,
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

export const { start, stop, success, error } = userRegister.actions;
export default userRegister.reducer;
