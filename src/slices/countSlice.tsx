import { createSlice } from '@reduxjs/toolkit';

export interface CountState {
  break: number;
  session: number;
  seconds: number;
}

const initialState: CountState = {
  break: 1,
  session: 1,
  seconds: 0,
};

export const countSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    incrementBreak: (state) => {
      state.break = state.break === 60 ? state.break : state.break + 1;
    },
    decrementBreak: (state) => {
      state.break = state.break <= 1 ? state.break : state.break - 1;
    },
    incrementSession: (state) => {
      state.session = state.session === 60 ? state.session : state.session + 1;
    },
    decrementSession: (state) => {
      state.session = state.session <= 1 ? state.session : state.session - 1;
    },
    start_stop: (state) => {
      state.seconds = state.seconds > 0 ? state.seconds - 1 : 60;
      state.session =
        state.seconds < 1 && state.session !== 0
          ? state.session - 1
          : state.session;
      state.break =
        state.seconds < 1 && state.session === 0 && state.break !== 0
          ? state.break - 1
          : state.session === 0
          ? 1
          : state.break;
    },
    reset: (state) => {
      state.break = 5;
      state.session = 25;
      state.seconds = 0;
    },
  },
});

export const {
  incrementBreak,
  decrementBreak,
  incrementSession,
  decrementSession,
  start_stop,
  reset,
} = countSlice.actions;

export default countSlice.reducer;
