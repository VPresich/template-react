import { createAction, createReducer } from "@reduxjs/toolkit";

export const selectLang = (state) => state.locale.lang;

export const changeLang = createAction("locale/changeLang");
export const localeReducer = createReducer({ lang: "uk" }, (builder) => {
  builder.addCase(changeLang, (state, action) => {
    state.lang = action.payload;
  });
});
