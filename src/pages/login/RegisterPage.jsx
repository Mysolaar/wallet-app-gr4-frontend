import { LoginLayout } from "./LoginLayout";
import { LoginForm } from "../../components/LoginForm/loginForm";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

export default function RegisterPage() {
  return (
    <div>
      <LoginLayout>
        <RegisterForm />
      </LoginLayout>
    </div>
  );
}
