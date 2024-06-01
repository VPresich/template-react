import { createSelector } from "@reduxjs/toolkit";
import { selectTextFilter } from "../filter/selectors";

export const selectIsLoading = (state) => state.tasks.isLoading;
export const selectEror = (state) => state.tasks.error;
export const selectTasks = (state) => state.tasks.items;

export const selectFilter = (state) => state.tasks.filter;

export const selectFilteredTasks = createSelector(
  [selectTasks, selectTextFilter],
  (tasks, textFilter) => {
    return tasks.filter((task) =>
      task.text.toLowerCase().includes(textFilter.toLowerCase())
    );
  }
);
