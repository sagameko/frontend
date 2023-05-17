import { useState } from "react";
import { Input, Button, Row, Col } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

export const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = () => {
        console.log("Username:", username);
        console.log("Password:", password);
    };

    const handleUserChange = (e) => {
        setUsername(e.target.value);
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    return (
        <>
            <div className="login-form">
                <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Username"
                    value={username}
                    onChange={handleUserChange}
                    name="username"
                    className="login-form-item"
                />
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    placeholder="password"
                    value={password}
                    onChange={handlePasswordChange}
                    className="login-form-item"
                    type="password"
                />
                <Button
                    type="primary"
                    onClick={handleSubmit}
                    className="button"
                >
                    Login
                </Button>
                Or <Link to="/register">register now</Link>
            </div>
        </>
    );
};
