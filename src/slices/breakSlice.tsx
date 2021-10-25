import { createSlice } from '@reduxjs/toolkit';

export interface BreakState {
  value: number;
}

const initialState: BreakState = {
  value: 5,
};

export const breakSlice = createSlice({
  name: 'break',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = breakSlice.actions;

export default breakSlice.reducer;
