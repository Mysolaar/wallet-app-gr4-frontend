import React from "react";
import { Formik, Form } from "formik";
import loginValidationSchema from "../../schemas/loginSchema";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
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

  const dispatch = useDispatch();

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await dispatch(login({ email: values.email, password: values.password }));
      console.log(values.email, values.password);
      resetForm();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginValidationSchema}
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
            <Link to={"/register"} className={css.link}>
              <SecondaryButton text={"REGISTER"} />
            </Link>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default LoginForm;
