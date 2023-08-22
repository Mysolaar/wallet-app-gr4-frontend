import css from "./RegisterPage.module.css";

export const RegisterLayout = (props) => {
  return (
    <div className={css.background}>
      <div className={css.layout}>
        <div className={css.logo}>
          <p>Finance App</p>
        </div>
        <div className={css.form}>{props.children}</div>
      </div>
    </div>
  );
};
