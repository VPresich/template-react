import { useSelector } from "react-redux";
import { selectFilteredTasks } from "../../redux/tasks/tasksSlice";
import Task from "../Task/Task";
import css from "./TaskList.module.css";

const TaskList = () => {
  const tasks = useSelector(selectFilteredTasks);

  return (
    <ul className={css.list}>
      {tasks.map((task) => (
        <li className={css.item} key={task.id}>
          <Task data={task} />
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
