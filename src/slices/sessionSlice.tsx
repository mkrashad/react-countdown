import { createSlice } from '@reduxjs/toolkit';

export interface SessionState {
  value: number;
}

const initialState: SessionState = {
  value: 25,
};

export const sessionSlice = createSlice({
  name: 'session',
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

export const { increment, decrement } = sessionSlice.actions;

export default sessionSlice.reducer;
