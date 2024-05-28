import Task from "../Task/Task";
import css from "./TaskList.module.css";

const TaskList = ({ tasks }) => {
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
