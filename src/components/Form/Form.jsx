import { useId } from "react";
import css from "./Form.module.css";
import Button from "../Button/Button";

function Form({ children, onSubmit }) {
  const userNameId = useId();
  const userRoleId = useId();
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      name: e.target.elements.userName.value,
      role: e.target.elements.role.value,
    });
    e.target.reset();
  };
  return (
    <div className={css.formContainer}>
      <h2>{children}</h2>
      <form className={css.controlsContainer} onSubmit={handleSubmit}>
        <label htmlFor={userNameId}> User name:</label>
        <input
          className={css.inputClass}
          type="text"
          name="userName"
          id={userNameId}
        />
        <label htmlFor={userRoleId}>User role:</label>
        <select className={css.inputClass} name="role" id={userRoleId}>
          <option value="User">User</option>
          <option value="Admin">Admin</option>
          <option value="Guest">Guest</option>
        </select>
        <Button type="submit" name="btnSubmit">
          Submit
        </Button>
      </form>
    </div>
  );
}
export default Form;
