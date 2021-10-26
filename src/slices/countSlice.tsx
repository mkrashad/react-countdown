import { createSlice } from '@reduxjs/toolkit';

export interface CountState {
  break: number;
  session: number;
}

const initialState: CountState = {
  break: 5,
  session: 25,
};

export const countSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    incrementBreak: (state) => {
      state.break = state.break === 60 ? state.break : state.break + 1;
    },
    decrementBreak: (state) => {
      state.break = state.break === 1 ? state.break : state.break - 1;
    },
    incrementSession: (state) => {
      state.session = state.session === 60 ? state.session : state.session + 1;
    },
    decrementSession: (state) => {
      state.session = state.session === 1 ? state.session : state.session - 1;
    },
    resetTimer: (state) => {
      state.break = 5;
      state.session = 25;
    },
  },
});

export const {
  incrementBreak,
  decrementBreak,
  incrementSession,
  decrementSession,
  resetTimer,
} = countSlice.actions;

export default countSlice.reducer;
