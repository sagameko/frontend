import { HeaderMenu } from "../HeaderMenu";
// import { TopBar } from "../TopBar";
import { HeaderLogo } from "../HeaderLogo";
import { HeaderLogin } from "../HeaderLogin";
import { Layout } from "antd";

const { Header: AntHeader } = Layout;

export const Header = ({ activePage }) => {
    return (
        <div>
            <AntHeader className="header-container">
                <HeaderLogo />
                <HeaderMenu navKey={activePage} />
                <HeaderLogin />
            </AntHeader>
        </div>
    );
};
