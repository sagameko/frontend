import { Menu } from "antd";
import { Link } from "react-router-dom";

const navItems = [
    {
        key: "home",
        label: <Link to="/">Home</Link>,
    },
    {
        key: "jobs",
        label: <Link to="/jobs">Jobs</Link>,
    },
    {
        key: "apply",
        label: <Link to="/apply">Apply</Link>,
    },
    {
        key: "profile",
        label: <Link to="/profile">Profile</Link>,
    },
];

export const HeaderMenu = ({ navKey }) => {
    return (
        <>
            <Menu
                theme="dark"
                mode="horizontal"
                selectedKeys={[navKey]}
                items={navItems}
                className="header-menu"
            />
        </>
    );
};
