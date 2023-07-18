import css from "./loginPage.module.css";
import { LoginForm } from "../../components/LoginForm/loginForm";

export default function LoginPage() {
  return (
    <div className={css.a}>
      <div className={css.b}>
        <p>Finance App</p>
      </div>
      <div className={css.c}>
        <LoginForm />
      </div>
    </div>
  );
}
