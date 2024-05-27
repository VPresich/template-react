import { createSlice } from "@reduxjs/toolkit";

export const selectLang = (state) => state.locale.lang;
export const selectUpdated = (state) => state.locale.updatedAt;

const slice = createSlice({
  name: "locale",
  initialState: { lang: "uk", updatedAt: Date.now() },
  reducers: {
    changeLang: {
      reducer: (state, action) => {
        state.lang = action.payload.value;
        state.updatedAt = action.payload.time;
      },
      prepare: (value) => {
        return {
          payload: {
            value,
            time: Date.now(),
          },
        };
      },
    },
  },
});

export default slice.reducer;
export const { changeLang } = slice.actions;
