import { Button } from "antd";
import logo from "../assets/logo-arrais.webp"
const Header = () => {
    return (
        <header className="w-2/12 h-screen p-4 border-r">
            <a href="/">
                <img
                    src={logo}
                    alt="Arrais Veículos"
                    className="m-auto"
                />
            </a>
            <Button
                type="primary"
                size="large"
                className="w-full mt-6 bg-laranja hover:!bg-laranja2"
                href="/login"
            >
                Login
            </Button>
        </header>
    );
}

export default Header;