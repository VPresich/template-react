import { useDispatch } from "react-redux";
import { deleteTask } from "../../redux/tasks/tasksOps";
import toast from "react-hot-toast";
import css from "./Task.module.css";
import Button from "../Button/Button";

const Task = ({ data: { id, text } }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(id))
      .unwrap()
      .then(() => {
        toast.success("fetchTasks fulfilled");
      })
      .catch(() => {
        toast.error("fetchTasks rejected");
      });
  };

  return (
    <div className={css.container}>
      <p className={css.text}>{text}</p>
      <Button onClick={handleDelete}>Delete</Button>
    </div>
  );
};

export default Task;
