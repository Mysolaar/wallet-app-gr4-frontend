import css from "./RegisterPage.module.css";

export const RegisterLayout = (props) => {
  return (
    <div className={css.a}>
      <div className={css.b}>
        <p>Finance App</p>
      </div>
      <div className={css.c}>{props.children}</div>
    </div>
  );
};
