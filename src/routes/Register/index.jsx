import { Header } from "../../components/Header";
import { RegisterForm } from "../../components/RegisterForm";
export const Register = () => {
    return (
        <>
            <Header />
            <div className="register-container">
                <h1>Register</h1>
                <p>
                    Please fill out the form below to register for an account.
                </p>
                <RegisterForm />
            </div>
        </>
    );
};
