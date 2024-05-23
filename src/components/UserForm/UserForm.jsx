import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import { FaTshirt } from "react-icons/fa";
import css from "./UserForm.module.css";
import Button from "../Button/Button";
import productSchema from "./validationSchema";

const UserForm = ({ initialValues, onFormSubmit }) => {
  const sizeId = useId();
  const colorId = useId();

  const handleSubmit = (state, actions) => {
    onFormSubmit(state);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={productSchema}
    >
      <div className={css.formContainer}>
        <FaTshirt size="100" />
        <Form className={css.controlsContainer}>
          <div className={css.fieldContainer}>
            <label htmlFor={sizeId}>Size:</label>
            <Field
              className={css.inputClass}
              as="select"
              name="size"
              id={sizeId}
            >
              <option value="ss">Small</option>
              <option value="sm">Medium</option>
              <option value="sl">Large</option>
            </Field>
            <ErrorMessage
              className={css.errorMessage}
              name="size"
              component="span"
            />
          </div>

          <div className={css.fieldContainer}>
            <label htmlFor={colorId}>Color:</label>
            <select className={css.inputClass} name="color" id={colorId}>
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="black">Black</option>
            </select>
            <ErrorMessage
              className={css.errorMessage}
              name="color"
              component="span"
            />
          </div>

          <Button type="submit" name="btnSubmit">
            Submit
          </Button>
        </Form>
      </div>
    </Formik>
  );
};
export default UserForm;
