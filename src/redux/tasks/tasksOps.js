import { tasksAPI } from "../../components/api/axiosInstances";
import {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
} from "./tasksSlice";

export const fetchTasks = () => async (dispatch) => {
  try {
    dispatch(fetchingInProgress());
    const response = await tasksAPI.get("/tasks");
    console.log(response);
    dispatch(fetchingSuccess(response.data));
  } catch (e) {
    dispatch(fetchingError(e.message));
  }
};
