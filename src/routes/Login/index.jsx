import { Header } from "../../components/Header";
import { LoginForm } from "../../components/LoginForm";
export const Login = () => {
    return (
        <>
            <Header />
            <div className="login-container">
                <h1>Welcome Back!</h1>
                <p>Please log in to access your account.</p>
                <LoginForm />
            </div>
        </>
    );
};
