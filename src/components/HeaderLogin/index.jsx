import { Button } from "antd";
import { Link } from "react-router-dom";

export const HeaderLogin = () => {
    return (
        <div>
            <Link to="/login">
                <Button type="primary">Login</Button>
            </Link>
        </div>
    );
};
