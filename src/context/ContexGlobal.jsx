import { createContext, useState } from "react";

export const ContexGlobal = createContext()

const ContexGlobalProvider = ({children}) => {


    const [filtro, setFiltro] = useState("");


    return (
        <ContexGlobal.Provider value={{
            filtro, 
            setFiltro
        }}>
            {children}
        </ContexGlobal.Provider>
    );
}

export default ContexGlobalProvider;