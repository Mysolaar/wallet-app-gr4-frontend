import css from "./loginPage.module.css";

export const LoginLayout = (props) => {
  return (
    <div className={css.a}>
      <div className={css.b}>
        <p>Finance App</p>
      </div>
      <div className={css.c}>{props.children}</div>
    </div>
  );
};
