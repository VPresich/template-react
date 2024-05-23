import css from "./TaskFilter.module.css";
const TaskFilter = ({ value, onFilter }) => {
  return (
    <div>
      <input
        className={css.inputClass}
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
};
export default TaskFilter;
