import * as Yup from "yup";

const productSchema = Yup.object().shape({
  size: Yup.string().required("Size is required"),
  color: Yup.string().required("Color is required"),
});

export default productSchema;
