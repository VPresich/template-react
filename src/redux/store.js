import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../redux/tasks/tasksSlice";
import filterReducer from "../redux/filter/filterSlice";
import authReducer from "../redux/auth/slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    tasks: tasksReducer,
    filters: filterReducer,
  },
});
