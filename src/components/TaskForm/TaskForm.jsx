import { useDispatch } from "react-redux";
import { addTask } from "../../redux/tasks/tasksOps";
import css from "./TaskForm.module.css";
import Button from "../Button/Button";

const TaskForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask({ text: e.target.elements.text.value }));
    e.target.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input className={css.inputClass} type="text" name="text" />
      <Button type="submit">Add task</Button>
    </form>
  );
};

export default TaskForm;
