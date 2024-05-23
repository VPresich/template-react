import * as Yup from "yup"; //namespace import

const UserSchema = Yup.object().shape({
  userName: Yup.string()
    .min(3, "Too short!")
    .max(20, "Too long!")
    .required("This is required you dummy!"),
  userEmail: Yup.string()
    .email("Must be in email format")
    .required("This is required you dummy!"),
  role: Yup.string()
    .oneOf(["guest", "user", "admin"])
    .required("This is required you dummy!"),
});

export default UserSchema;
