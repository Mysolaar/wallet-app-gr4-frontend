import css from "./loginForm.module.css";
import PrimaryButton from "../reusableButtons/PrimaryButton/PrimaryButton";
import SecondaryButton from "../reusableButtons/SecondaryButton/SecondaryButton";

export const LoginForm = () => {
  return (
    <div className={css.container}>
      <h2 className={css.title}>
        <svg className={css.wallet}>
          <use xlinkHref="/src/img/icons.svg#logo6"></use>
        </svg>
        Wallet
      </h2>
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
