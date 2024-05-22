import { useId } from "react";
import css from "./ControledFrom.module.css";
import Button from "../Button/Button";

function ControledForm({ children, onSubmit }) {
  const input1Id = useId();
  const input2Id = useId();
  const switchId = useId();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      input1: e.target.elements.input1.value,
      input2: e.target.elements.input2.value,
      switch1: e.target.elements.switch1.value,
    });
    e.target.reset();
  };
  return (
    <div className={css.formContainer}>
      <h2>{children}</h2>
      <form className={css.controlsContainer} onSubmit={handleSubmit}>
        <label htmlFor={input1Id}> Input 1:</label>
        <input
          className={css.inputClass}
          type="text"
          name="input1"
          id={input1Id}
        />
        <label htmlFor={input2Id}> Input 2:</label>
        <input
          className={css.inputClass}
          type="text"
          name="input2"
          id={input2Id}
        />
        <label htmlFor={switchId}>User role:</label>
        <select className={css.inputClass} name="switch1" id={switchId}>
          <option value="value1">Value 1</option>
          <option value="value2">Value 2</option>
          <option value="value3">Value 3</option>
        </select>

        <Button type="submit" name="btnSubmit">
          Submit
        </Button>
      </form>
    </div>
  );
}
export default ControledForm;
