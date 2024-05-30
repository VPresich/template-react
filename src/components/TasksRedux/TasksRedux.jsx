import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoading, selectEror } from "../../redux/tasks/tasksSlice";
import TaskForm from "../TaskForm/TaskForm";
import TaskList from "../TaskList/TaskList";

import { fetchTasks } from "../../redux/tasks/tasksOps";

import { Toaster } from "react-hot-toast";
import Layout from "../Layout/Layout";
import toast from "react-hot-toast";
// import css from "./TasksRedux.module.css";

const TasksRedux = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectEror);

  useEffect(() => {
    dispatch(fetchTasks())
      .unwrap()
      .then(() => {
        toast.success("fetchTasks fulfilled");
      })
      .catch(() => {
        toast.error("fetchTasks rejected");
      });
  }, [dispatch]);

  return (
    <Layout>
      <h1>HTTP requests with Redux</h1>
      <TaskForm />
      {isLoading && <p>Loading tasks...</p>}
      {error && <p>{error}</p>}
      <TaskList />
      <Toaster />
    </Layout>
  );
};
export default TasksRedux;
