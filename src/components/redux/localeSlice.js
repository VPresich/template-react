import { createSlice } from "@reduxjs/toolkit";

export const selectLang = (state) => state.locale.lang;

const slice = createSlice({
  name: "locale",
  initialState: { lang: "uk" },
  reducers: {
    changeLang(state, action) {
      state.lang = action.payload;
    },
  },
});

export default slice.reducer;
export const { changeLang } = slice.actions;
