import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import css from "./LoginForm.module.css";
import ReactWallet from "../../icons/wallet-icon.svg";
import ReactPadlock from "../../icons/padlock-icon.svg";
import ReactEnvelope from "../../icons/envelope-icon.svg";
import PrimaryButton from "../reusableButtons/PrimaryButton/PrimaryButton";
import SecondaryButton from "../reusableButtons/SecondaryButton/SecondaryButton";
import { login } from "../../redux/auth/authOperations";

const LoginForm = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("This field is required"),
    password: Yup.string().required("This field is required"),
  });
  const dispatch = useDispatch();
  const handleSubmit = (values) => {
    const email = values.email;
    const password = values.password;
    console.log(email, password);
    dispatch(login({ email, password }));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, errors, touched, handleChange }) => (
        <div className={css.container}>
          <div className={css.logo__container}>
            <img
              src={ReactWallet}
              alt="wallet icon"
              width={40}
              height={40}
              className={css.iconWallet}
            />
            <p className={css.title}>Wallet</p>
          </div>

          <Form className={css.form}>
            <label htmlFor="email" className={css.label}>
              <img
                src={ReactEnvelope}
                alt="Envelope icon"
                width={40}
                height={40}
                className={css.envelope__svg}
              />
              <input
                type="email"
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                placeholder="E-mail"
                className={css.input}
              />
              {touched.email && errors.email ? <div>{errors.email}</div> : null}
            </label>

            <label htmlFor="password" className={css.label}>
              <img
                src={ReactPadlock}
                alt="Padlock icon"
                width={40}
                height={40}
                className={css.padlock__svg}
              />
              <input
                type="password"
                id="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                placeholder="Password"
                className={css.input}
              />
              {touched.password && errors.password ? (
                <div>{errors.password}</div>
              ) : null}
            </label>

            <PrimaryButton text={"LOG IN"} />
            <SecondaryButton text={"REGISTER"} />
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default LoginForm;
