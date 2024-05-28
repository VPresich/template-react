import { useDispatch } from "react-redux";
import { deleteTask } from "../../redux/tasks/tasksOps";
import css from "./Task.module.css";
import Button from "../Button/Button";

const Task = ({ data: { id, text } }) => {
  const dispatch = useDispatch();

  return (
    <div className={css.container}>
      <p className={css.text}>{text}</p>
      <Button onClick={() => dispatch(deleteTask(id))}>Delete</Button>
    </div>
  );
};

export default Task;
