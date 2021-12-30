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

const userGet = createSlice({
  name: "user/get",
  initialState,
  reducers: {
    start: (state) => ({
      ...state,
      isLoading: true,
    }),
    success: (state, action) => ({
      ...state,
      isLoading: false,
      error: null,
      data: action.payload,
    }),
    error: (state, action) => ({
      ...state,
      isLoading: false,
      error: action.payload,
    }),
    stop: (state) => ({
      ...state,
      isLoading: false,
    }),
  },
});

export const { start, success, error, stop } = userGet.actions;
export default userGet.reducer;
