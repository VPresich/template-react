import { createAsyncThunk } from "@reduxjs/toolkit";
import { tasksManagerAPI as apiInst } from "../../components/api/axiosInstances";

export const fetchTasks = createAsyncThunk(
  "tasks/fetchTasks",
  async (_, thunkAPI) => {
    try {
      const response = await apiInst.get("/tasks");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  "tasks/deleteTask",
  async (taskId, thunkAPI) => {
    try {
      const response = await apiInst.delete(`/tasks/${taskId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addTask = createAsyncThunk(
  "tasks/addTask",
  async (newTask, thunkAPI) => {
    try {
      const response = await apiInst.post("/tasks", newTask);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateTask = createAsyncThunk(
  "tasks/updateTask",
  async (updatedTask, thunkAPI) => {
    try {
      const response = await apiInst.put(
        `/tasks/${updatedTask.id}`,
        updatedTask
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
