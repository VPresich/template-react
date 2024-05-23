import * as Yup from "yup";
const searchSchema = Yup.object().shape({
  query: Yup.string()
    .min(1, "Too short!")
    .test(
      "not-only-spaces",
      "At least one character different from a space",
      (value) => value && /\S/.test(value)
    )
    .required("This is required, you dummy!"),
});

export default searchSchema;
