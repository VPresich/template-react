import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./ArticlesForm.module.css";
import searchSchema from "./searchSchema";
import Button from "../Button/Button";

const ArticlesForm = ({ onSearch }) => {
  const handleSubmit = (values, actions) => {
    onSearch(values.query.trim());
    actions.resetForm();
  };

  return (
    <div className={css.formContainer}>
      <Formik
        initialValues={{ query: "" }}
        onSubmit={handleSubmit}
        validationSchema={searchSchema}
      >
        <Form className={css.controlsContainer}>
          <div className={css.fieldContainer}>
            <Field className={css.inputClass} name="query"></Field>
            <ErrorMessage
              className={css.errorMessage}
              name="query"
              component="span"
            />
          </div>
          <Button type="submit" name="btnSubmit">
            Search
          </Button>
        </Form>
      </Formik>
    </div>
  );
};
export default ArticlesForm;
