import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import { FaTshirt } from "react-icons/fa";
import css from "./UserForm.module.css";
import Button from "../Button/Button";
import productSchema from "./validationSchema";

const UserForm = ({ initialValues, onFormSubmit }) => {
  const sizeId = useId();
  const colorId = useId();

  const handleSubmit = (values) => {
    onFormSubmit(values);
    // actions.resetForm();
  };

  return (
    <div className={css.formContainer}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={productSchema}
      >
        {(props) => (
          <Form className={css.controlsContainer}>
            <FaTshirt size="100" color={props.values.color} />
            <div className={css.fieldContainer}>
              <label htmlFor={sizeId}>Size:</label>
              <Field
                className={css.inputClass}
                as="select"
                name="size"
                id={sizeId}
              >
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </Field>
              <ErrorMessage
                className={css.errorMessage}
                name="size"
                component="span"
              />
            </div>

            <div className={css.fieldContainer}>
              <label htmlFor={colorId}>Color:</label>
              <Field
                className={css.inputClass}
                as="select"
                name="color"
                id={colorId}
              >
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="black">Black</option>
              </Field>
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
        )}
      </Formik>
    </div>
  );
};
export default UserForm;
