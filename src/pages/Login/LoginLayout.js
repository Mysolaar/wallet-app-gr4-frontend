import css from "./LoginPage.module.css";

export const LoginLayout = (props) => {
  return (
    <div className={css.container}>
      <div className={css.layout}>
        <div className={css.logo_container}>
          <div className={css.logo}></div>
        </div>
        <div className={css.form}>{props.children}</div>
      </div>
    </div>
  );
};
