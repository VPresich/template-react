import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { taskSchema } from "./taskSchema.js";
import css from "./TaskEditor.module.css";
import { updateTask } from "../../redux/tasks/tasksOps";
import Button from "../Button/Button";

const TaskEditor = ({ taskId, initialValue, onClose }) => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { setSubmitting }) => {
    dispatch(updateTask({ id: taskId, text: values.text }))
      .unwrap()
      .then(() => {
        setSubmitting(false);
        onClose();
      });
  };

  return (
    <Formik
      initialValues={{ text: initialValue }}
      validationSchema={taskSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={css.controlsContainer}>
          <div className={css.fieldContainer}>
            <Field className={css.inputClass} type="text" name="text" />
            <ErrorMessage
              className={css.errorMessage}
              name="text"
              component="span"
            />
          </div>
          <Button variant="secondary" type="submit" disabled={isSubmitting}>
            Save
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default TaskEditor;
