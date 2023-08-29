import * as Yup from "yup";
const loginValidationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().required("Required"),
});

export default loginValidationSchema;
