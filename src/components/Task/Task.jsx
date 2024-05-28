import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask } from "../../redux/tasks/tasksOps";
import TaskEditor from "../TaskEditor/TaskEditor";
import toast from "react-hot-toast";
import css from "./Task.module.css";
import Button from "../Button/Button";

const Task = ({ data: { id, text } }) => {
  const [isEditing, setIsEditing] = useState(false);

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(id))
      .then(() => {
        toast.success("Delete fulfilled");
      })
      .catch(() => {
        toast.error("Delete rejected");
      });
  };

  return (
    <div className={css.container}>
      {isEditing ? (
        <TaskEditor
          initialValue={text}
          taskId={id}
          onClose={() => setIsEditing(false)}
        />
      ) : (
        <p className={css.text} onClick={() => setIsEditing(true)}>
          {text}
        </p>
      )}
      <Button onClick={handleDelete}>Delete</Button>
    </div>
  );
};
export default Task;
