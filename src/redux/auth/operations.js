import { tasksManagerAPI } from "../../components/api/axiosInstances";
import { createAsyncThunk } from "@reduxjs/toolkit";

const setAuthHeader = (token) => {
  tasksManagerAPI.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  tasksManagerAPI.defaults.headers.common["Authorization"] = "";
};

/*
 * POST @ /users/signup
 * body: { name, email, password }
 *
 * After successful registration, add the token to the HTTP header
 */
export const register = createAsyncThunk(
  "auth/register",
  async (userInfo, thunkAPI) => {
    try {
      const response = await tasksManagerAPI.post("/users/signup", userInfo);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * POST @ /users/login
 * body: { email, password }
 *
 * After successful login, add the token to the HTTP header
 */
export const logIn = createAsyncThunk(
  "auth/login",
  async (userInfo, thunkAPI) => {
    try {
      const response = await tasksManagerAPI.post("/users/login", userInfo);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 *
 * After a successful logout, remove the token from the HTTP header
 */
export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await tasksManagerAPI.post("/users/logout");
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
