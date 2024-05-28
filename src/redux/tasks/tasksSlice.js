// import { createSlice } from "@reduxjs/toolkit";
// import { fetchTasks, deleteTask, addTask, updateTask } from "./tasksOps";

// const slice = createSlice({
//   name: "tasks",
//   initialState: {
//     items: [],
//     loading: false,
//     error: false,
//   },
//   extraReducers: (builder) =>
//     builder
//       .addCase(fetchTasks.pending, (state) => {
//         state.error = false;
//         state.loading = true;
//       })
//       .addCase(fetchTasks.fulfilled, (state, action) => {
//         state.loading = false;
//         state.items = action.payload;
//       })
//       .addCase(fetchTasks.rejected, (state) => {
//         state.loading = false;
//         state.error = true;
//       })
//       .addCase(deleteTask.pending, (state) => {
//         state.error = false;
//         state.loading = true;
//       })
//       .addCase(deleteTask.fulfilled, (state, action) => {
//         state.loading = false;
//         state.items = state.items.filter(
//           (item) => item.id !== action.payload.id
//         );
//       })
//       .addCase(deleteTask.rejected, (state) => {
//         state.loading = false;
//         state.error = true;
//       })
//       .addCase(addTask.pending, (state) => {
//         state.error = false;
//         state.loading = true;
//       })
//       .addCase(addTask.fulfilled, (state, action) => {
//         state.loading = false;
//         state.items.push(action.payload);
//       })
//       .addCase(addTask.rejected, (state) => {
//         state.loading = false;
//         state.error = true;
//       })
//       .addCase(updateTask.fulfilled, (state, action) => {
//         const taskIndex = state.items.findIndex(
//           (item) => item.id === action.payload.id
//         );
//         state.items[taskIndex] = action.payload;
//       }),
// });

// export default slice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { fetchTasks, deleteTask, addTask } from "./tasksOps";
const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteTask.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      })
      .addCase(deleteTask.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addTask.pending, (state) => {
        state.error = false;
        state.isLoading = true;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.push(action.payload);
      })
      .addCase(addTask.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      }),
});

export default tasksSlice.reducer;

export const { fetchingInProgress, fetchingSuccess, fetchingError } =
  tasksSlice.actions;
