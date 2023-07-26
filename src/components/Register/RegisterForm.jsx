import React from "react";
import { Formik, Form } from "formik";
import registerValidationSchema from "../../schemas/registerSchema";
import PasswordStrengthMeter from "./PasswordStreghtMeter";
import { Link } from "react-router-dom";
import PrimaryButton from "../reusableButtons/PrimaryButton/PrimaryButton";
import SecondaryButton from "../reusableButtons/SecondaryButton/SecondaryButton";
import ReactWallet from "../../icons/wallet-icon.svg";
import ReactPadlock from "../../icons/padlock-icon.svg";
import ReactEnvelope from "../../icons/envelope-icon.svg";
import ReactPortrait from "../../icons/portrait-icon.svg";
import css from "./RegisterForm.module.css";

const RegistrationForm = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={registerValidationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, errors, touched, handleChange }) => (
        <div className={css.container}>
          <div className={css.logo__container}>
            <img src={ReactWallet} alt="wallet icon" width={40} height={40} />
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

            <label htmlFor="confirmPassword" className={css.label}>
              <img
                src={ReactPadlock}
                alt="Padlock icon"
                width={40}
                height={40}
                className={css.padlock__svg}
              />
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                className={css.input}
              />
              <PasswordStrengthMeter password={values.password} />
              {touched.confirmPassword && errors.confirmPassword ? (
                <div>{errors.confirmPassword}</div>
              ) : null}
            </label>

            <label htmlFor="name" className={css.label}>
              <img
                src={ReactPortrait}
                alt="Portrait icon"
                width={40}
                height={40}
                className={css.portrait__svg}
              />
              <input
                type="text"
                id="name"
                name="name"
                value={values.name}
                onChange={handleChange}
                placeholder="First Name"
                className={css.input}
              />
              {touched.name && errors.name ? <div>{errors.name}</div> : null}
            </label>

            <PrimaryButton text={"REGISTER"} />

            <SecondaryButton text={"LOG IN"} />
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default RegistrationForm;
