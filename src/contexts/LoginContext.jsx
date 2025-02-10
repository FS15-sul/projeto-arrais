import { createContext, useState } from "react";

export const LoginContext = createContext();

const LoginProvider = ({ children }) => {

    const dadosSessao = sessionStorage.getItem("usuario") ? JSON.parse(sessionStorage.getItem("usuario")) : null;

    const [usuario, setUsuario] = useState(dadosSessao);

    return (
        <LoginContext.Provider value={{usuario, setUsuario}}>
            {children}
        </LoginContext.Provider>
    );
}
 
export default LoginProvider;