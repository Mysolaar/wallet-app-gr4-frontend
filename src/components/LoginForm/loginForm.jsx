import css from "./loginForm.module.css";
import PrimaryButton from "../reusableButtons/PrimaryButton/PrimaryButton";
import SecondaryButton from "../reusableButtons/SecondaryButton/SecondaryButton";

export const LoginForm = () => {
  return (
    <div className={css.container}>
      <form className={css.form} autoComplete="off">
        <label className={css.label}>
          <input
            className={css.input}
            type="email"
            name="email"
            placeholder="E-mail"
          />
        </label>
        <label className={css.label}>
          <input
            className={css.input}
            type="password"
            name="password"
            placeholder="Password"
          />
        </label>
        <PrimaryButton text={"LOG IN"} />
        <SecondaryButton text={"REGISTER"} />
      </form>
    </div>
  );
};
