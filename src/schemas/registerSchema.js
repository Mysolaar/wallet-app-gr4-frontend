import * as Yup from "yup";

const registerValidationSchema = Yup.object().shape({
  name: Yup.string().required("This field is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("This field is required"),
  password: Yup.string().required("This field is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords should match")
    .required("This field is required"),
});

export default registerValidationSchema;
