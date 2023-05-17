import {
    MobileOutlined,
    MailOutlined,
    FacebookFilled,
    TwitterSquareFilled,
    InstagramFilled,
    UserOutlined,
} from "@ant-design/icons";

import { useNavigate } from "react-router-dom";

export const TopBar = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate("/login");
    };

    return (
        <div className="topBar">
            <div className="contactInfo">
                <ul>
                    <li>
                        <a href="tel:0487595256">
                            <span>
                                <MobileOutlined />
                                0487595256
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="mailto: contact@corpu.co.au">
                            <span>
                                <MailOutlined />
                                contact@corpu.co.au
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="otherInfo">
                <ul className="socialMedia">
                    <li>
                        <a href="https://www.facebook.com/">
                            <FacebookFilled />
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com">
                            <TwitterSquareFilled />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com">
                            <InstagramFilled />
                        </a>
                    </li>
                </ul>
                <button onClick={handleLoginClick}>
                    <UserOutlined />
                    Login
                </button>
            </div>
        </div>
    );
};
