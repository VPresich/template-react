import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../redux/tasks/tasksSlice";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});
