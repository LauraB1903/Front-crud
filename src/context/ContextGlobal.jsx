import { createContext, useState } from "react";

export const ContextGlobal = createContext()

const ContextGlobalProvider = ({children}) => {


    const [filtro, setFiltro] = useState("");


    return (
        <ContextGlobal.Provider value={{
            filtro, 
            setFiltro
        }}>
            {children}
        </ContextGlobal.Provider>
    );
}

export default ContextGlobalProvider;