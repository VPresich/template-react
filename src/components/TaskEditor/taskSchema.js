import * as Yup from "yup";

export const taskSchema = Yup.object({
  text: Yup.string()
    .min(1, "Task text must contain at least 1 character")
    .required("Task text is required"),
});
