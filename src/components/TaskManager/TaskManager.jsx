import { useState } from "react";
import initialTasks from "../../data/tasks.json";
import TaskList from "../TaskList/TaskList";
import TaskForm from "../TaskForm/TaskForm";
import TaskFilter from "../TaskFilter/TaskFilter";
import css from "./TaskManager.module.css";

const TaskManager = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [taskFilter, setTaskFilter] = useState("");

  const addTask = (newTask) => {
    setTasks((prevTasks) => {
      return [...prevTasks, newTask];
    });
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => {
      return prevTasks.filter(({ id }) => id !== taskId);
    });
  };

  const visibleTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(taskFilter.toLowerCase())
  );

  return (
    <div className={css.container}>
      <TaskForm onAdd={addTask} />
      <TaskFilter value={taskFilter} onFilter={setTaskFilter} />
      <TaskList tasks={visibleTasks} onDelete={deleteTask} />
    </div>
  );
};

export default TaskManager;
