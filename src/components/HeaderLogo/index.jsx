import React from "react";
import { Layout } from "antd";

const { Header } = Layout;
import logo from "../../assets/logo.svg";

export const HeaderLogo = () => {
    return (
        <Header className="header-logo">
            <img
                src={logo}
                alt="logo"
                style={{ maxHeight: "64px", maxWidth: "64px" }}
            />
        </Header>
    );
};
