import { Button } from "antd";
import logo from "../assets/logo-arrais.webp"
import { useContext } from "react";
import { LoginContext } from "../contexts/LoginContext";
const Header = () => {

    const { usuario, setUsuario } = useContext(LoginContext);

    return (
        <header className="w-2/12 h-screen p-4 border-r">
            <a href="/">
                <img
                    src={logo}
                    alt="Arrais Veículos"
                    className="m-auto"
                />
            </a>

            {
                usuario ? (
                    <>
                        <h6 className="text-lg">{usuario.NM_USUARIO}</h6>
                        <h6>{usuario.NM_CARGO}</h6>
                        <button onClick={() => {
                            setUsuario();
                            sessionStorage.removeItem("usuario")
                            }}>Sair</button>
                    </>
                ) : (
                    <Button
                        type="primary"
                        size="large"
                        className="w-full mt-6 bg-laranja hover:!bg-laranja2"
                        href="/login"
                    >
                        Login
                    </Button>
                )
            }
        </header>
    );
}

export default Header;