import css from "./loginForm.module.css";
import PrimaryButton from "../reusableButtons/PrimaryButton/PrimaryButton";
import SecondaryButton from "../reusableButtons/SecondaryButton/SecondaryButton";

export const LoginForm = () => {
  return (
    <div className={css.container}>
      <div className={css.logo__container}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="40px"
          width="40px"
          viewBox="0 0 35 35"
        >
          <path
            fill="#24cca7"
            d="M3.755 7.619l16.211-4.537-0.859-1.779c-0.562-1.157-1.932-1.634-3.060-1.058l-14.513 7.375h2.219z"
          ></path>
          <path
            fill="#24cca7"
            d="M24.813 3.048c-0.195 0-0.391 0.029-0.586 0.087l-15.012 4.484h18.431l-0.693-2.779c-0.266-1.083-1.163-1.793-2.14-1.793z"
          ></path>
          <path
            fill="#4a56e2"
            d="M28.36 8.573h-26.559c-0.568 0-1.074 0.26-1.405 0.67-0.151 0.189-0.266 0.406-0.331 0.645-0.040 0.15-0.065 0.307-0.065 0.467v19.862c0 0.984 0.805 1.783 1.797 1.783h26.559c0.992 0 1.797-0.799 1.797-1.783v-4.973h-10.662c-1.685 0-3.054-1.358-3.054-3.030v-3.964c0-0.82 0.331-1.565 0.866-2.111 0.474-0.485 1.11-0.813 1.822-0.895 0.119-0.014 0.241-0.021 0.363-0.021h10.666v-4.867c0.004-0.984-0.801-1.783-1.793-1.783z"
          ></path>
          <path
            fill="#4a56e2"
            d="M31.414 16.926c-0.18-0.164-0.392-0.289-0.629-0.371-0.183-0.061-0.377-0.096-0.582-0.096h-10.712c-0.992 0-1.797 0.799-1.797 1.783v3.968c0 0.984 0.805 1.783 1.797 1.783h10.712c0.205 0 0.399-0.036 0.582-0.096 0.237-0.078 0.449-0.207 0.629-0.371 0.359-0.324 0.586-0.795 0.586-1.316v-3.968c0-0.52-0.226-0.991-0.586-1.316zM23.243 20.581c0 0.492-0.402 0.891-0.898 0.891h-0.596c-0.496 0-0.898-0.399-0.898-0.891v-0.592c0-0.285 0.133-0.538 0.345-0.699 0.155-0.118 0.345-0.193 0.553-0.193h0.596c0.496 0 0.898 0.399 0.898 0.891v0.592z"
          ></path>
        </svg>
        <h2 className={css.title}>Wallet</h2>
      </div>
      <form className={css.form} autoComplete="on">
        <label className={css.label}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 45 35"
            className={css.envelope}
          >
            <path
              fill="#e0e0e0"
              d="M37 0h-32c-2.2 0-3.98 1.8-3.98 4l-0.020 24c0 2.2 1.8 4 4 4h32c2.2 0 4-1.8 4-4v-24c0-2.2-1.8-4-4-4zM37 8l-16 10-16-10v-4l16 10 16-10v4z"
            ></path>
          </svg>
          <input
            className={css.input}
            type="email"
            name="email"
            placeholder="E-mail"
          />
        </label>
        <label className={css.label}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 35 35"
            className={css.padlock}
          >
            <path
              fill="#e0e0e0"
              d="M22.095 10.667h-1.524v-3.048c0-4.206-3.413-7.619-7.619-7.619s-7.619 3.413-7.619 7.619v3.048h-1.524c-1.676 0-3.048 1.371-3.048 3.048v15.238c0 1.676 1.371 3.048 3.048 3.048h18.286c1.676 0 3.048-1.371 3.048-3.048v-15.238c0-1.676-1.371-3.048-3.048-3.048zM12.952 24.381c-1.676 0-3.048-1.371-3.048-3.048s1.371-3.048 3.048-3.048c1.676 0 3.048 1.371 3.048 3.048s-1.371 3.048-3.048 3.048zM17.676 10.667h-9.448v-3.048c0-2.606 2.118-4.724 4.724-4.724s4.724 2.118 4.724 4.724v3.048z"
            ></path>
          </svg>
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
