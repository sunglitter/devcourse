import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter", // slice 이름
  initialState: {
    // 초기 값
    value: 0,
  },
  reducers: {
    // 리듀서 함수
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action 생성자 함수(increment, decrement, incrementByAmount) export
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// store에서 사용할 수 있도록 export
export default counterSlice.reducer;
