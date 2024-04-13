import {useContext} from 'react';
import { Globalcontext } from '../context/ContexGlobal';

const Input = ({buscador}) => {
    

    const { filtro, setFiltro } = useContext(Globalcontext)

    const handleFiltroChange = (e) => {
        const buscadorValue = e.target.value;
        setFiltro(buscadorValue);
        buscador(buscadorValue)
      };

    return (
        <div>
        <input 
        type="text"
        placeholder="Busca por nombre o caracteristica"
        value={filtro}
        onChange={handleFiltroChange}
      />
        </div>
    );
}

export default Input;