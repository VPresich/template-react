import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TaskForm from "../TaskForm/TaskForm";
import TaskList from "../TaskList/TaskList";

import { fetchTasks } from "../../redux/tasks/tasksOps";
import { selectTasks } from "../../redux/tasks/tasksSelectors";

import { Toaster } from "react-hot-toast";
import Layout from "../Layout/Layout";
// import css from "./TasksReduxManager.module.css";

const TasksRedux = () => {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(selectTasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <Layout>
      <h1>HTTP requests with Redux</h1>
      <TaskForm />
      {isLoading && <p>Loading tasks...</p>}
      {error && <p>{error}</p>}
      {items.length > 0 && <TaskList tasks={items} />}
      <Toaster />
    </Layout>
  );
};
export default TasksRedux;
