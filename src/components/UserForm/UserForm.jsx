import { useId, useState } from "react";
import { FaTshirt } from "react-icons/fa";
import css from "./UserForm.module.css";
import Button from "../Button/Button";

const initialValues = { size: "ss", color: "red" };

const UserForm = () => {
  const [state, setState] = useState(initialValues);

  const sizeId = useId();
  const colorId = useId();

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    setState(initialValues);
  };

  return (
    <div className={css.formContainer}>
      <FaTshirt size="100" color={state.color} />
      <form
        className={css.controlsContainer}
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit}
      >
        <label htmlFor={sizeId}>Size:</label>
        <select
          className={css.inputClass}
          name="size"
          id={sizeId}
          value={state.size}
          onChange={handleChange}
        >
          <option value="ss">Small</option>
          <option value="sm">Medium</option>
          <option value="sl">Large</option>
        </select>
        <label htmlFor={colorId}>Color:</label>
        <select
          className={css.inputClass}
          name="color"
          id={colorId}
          value={state.color}
          onChange={handleChange}
        >
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="black">Black</option>
        </select>

        <Button type="submit" name="btnSubmit">
          Submit
        </Button>
      </form>
    </div>
  );
};
export default UserForm;
