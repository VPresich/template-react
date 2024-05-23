import css from "./TaskForm.module.css";
import Button from "../Button/Button";

const TaskForm = ({ onAdd }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({
      id: Date.now(),
      text: e.target.elements.text.value,
    });
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
