import { useDispatch, useSelector } from "react-redux";
import { useId } from "react";
import {
  changeTextFilter,
  selectTextFilter,
} from "../../redux/filter/filterSlice";

import css from "./TaskFilter.module.css";

const TaskFilter = () => {
  const inputId = useId();
  const dispatch = useDispatch();
  const value = useSelector(selectTextFilter);
  return (
    <div>
      <label htmlFor={inputId}></label>
      <input
        className={css.inputClass}
        type="text"
        value={value}
        id={inputId}
        onChange={(e) => dispatch(changeTextFilter(e.target.value))}
      />
    </div>
  );
};
export default TaskFilter;
