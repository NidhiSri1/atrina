import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  info:{}
};

export const stepperSlice = createSlice({
  name: "stepper",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    reset:(state) => {
        state.value = 0;
    },
    savedData: (state, action) => {
        state.info = { ...state.info, ...action.payload };
      }
  },
});


export const { increment,reset,savedData } = stepperSlice.actions

export default stepperSlice.reducer