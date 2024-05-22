import { useId, useState } from "react";
import css from "./ControledFrom.module.css";
import Button from "../Button/Button";

const initialValues = { login: "", email: "", tech: "html" };
function ControledForm({ children }) {
  const [state, setState] = useState(initialValues);

  const loginId = useId();
  const EmailId = useId();
  const techId = useId();

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
      <h2>{children}</h2>
      <form
        className={css.controlsContainer}
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit}
      >
        <label htmlFor={loginId}> Login:</label>
        <input
          className={css.inputClass}
          type="text"
          name="login"
          value={state.login}
          id={loginId}
          onChange={handleChange}
        />
        <label htmlFor={EmailId}> Email:</label>
        <input
          className={css.inputClass}
          type="text"
          name="email"
          id={EmailId}
          value={state.email}
          onChange={handleChange}
        />
        <label htmlFor={techId}>Tech:</label>
        <select
          className={css.inputClass}
          name="tech"
          id={techId}
          value={state.tech}
          onChange={handleChange}
        >
          <option value="html">HTML</option>
          <option value="js">JavaScript</option>
          <option value="node">NodeJS</option>
        </select>

        <Button type="submit" name="btnSubmit">
          Submit
        </Button>
      </form>
    </div>
  );
}
export default ControledForm;
