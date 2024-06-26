import { createSlice } from "@reduxjs/toolkit";
import { fetchTasks, deleteTask, addTask, updateTask } from "./tasksOps";
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
        state.error = null;
        state.isLoading = true;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.push(action.payload);
      })
      .addCase(addTask.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(updateTask.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        state.isLoading = false;
        const taskIndex = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
        state.items[taskIndex] = action.payload;
      })
      .addCase(updateTask.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export default tasksSlice.reducer;

// export const selectIsLoading = (state) => state.tasks.isLoading;
// export const selectEror = (state) => state.tasks.error;
// export const selectTasks = (state) => state.tasks.items;

// export const selectFilteredTasks = (state) => {
//   const tasks = selectTasks(state);
//   const textFilter = selectTextFilter(state);

//   return tasks.filter((task) =>
//     task.text.toLowerCase().includes(textFilter.toLowerCase())
//   );
// };

// export const selectFilteredTasks = createSelector(
//   [selectTasks, selectTextFilter],
//   (tasks, textFilter) => {
//     return tasks.filter((task) =>
//       task.text.toLowerCase().includes(textFilter.toLowerCase())
//     );
//   }
// );
