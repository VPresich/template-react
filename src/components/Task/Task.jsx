import css from "./Task.module.css";
import Button from "../Button/Button";

const Task = ({ data: { id, text }, onDelete }) => {
  return (
    <div className={css.container}>
      <p className={css.text}>{text}</p>
      <Button onClick={() => onDelete(id)}>Delete</Button>
    </div>
  );
};

export default Task;
