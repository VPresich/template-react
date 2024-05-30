import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../redux/tasks/tasksSlice";
import filterReducer from "../redux/filter/filterSlice";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filterReducer,
  },
});
