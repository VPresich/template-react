import { createAction, createReducer } from "@reduxjs/toolkit";

export const deposit = createAction("balance/deposit");
export const withdraw = createAction("balance/withdraw");

export const balanceReducer = createReducer({ value: 1000 }, (builder) => {
  builder
    .addCase(deposit, (state, action) => {
      state.value += action.payload;
    })
    .addCase(withdraw, (state, action) => {
      state.value -= action.payload;
    });
});
