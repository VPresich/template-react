import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import css from "./MyForm.module.css";
import Button from "../Button/Button";
import UserSchema from "./userSchema";

function MyForm({ initialValues, onFormSubmit }) {
  const userNameId = useId();
  const userEmailId = useId();
  const userRoleId = useId();

  const handleSubmit = (values, actions) => {
    onFormSubmit(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={UserSchema}
    >
      <div className={css.formContainer}>
        <Form className={css.controlsContainer}>
          <div className={css.field}>
            <label htmlFor={userNameId}> User name:</label>
            <Field className={css.inputClass} name="userName" id={userNameId} />
            <ErrorMessage
              className={css.errorMessage}
              name="userName"
              component="span"
            />
          </div>
          <div className={css.field}>
            <label htmlFor={userEmailId}> User email:</label>
            <Field
              className={css.inputClass}
              name="userEmail"
              id={userEmailId}
            />
            <ErrorMessage
              className={css.errorMessage}
              name="userEmail"
              component="span"
            />
          </div>
          <div className={css.field}>
            <label htmlFor={userRoleId}>User role:</label>
            <Field
              as="select"
              className={css.inputClass}
              name="role"
              id={userRoleId}
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
              <option value="guest">Guest</option>
            </Field>
            <ErrorMessage
              className={css.errorMessage}
              name="role"
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
}
export default MyForm;
