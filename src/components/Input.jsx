import React, { useContext } from 'react';
import { ContextGlobal } from '../context/ContextGlobal';

const Input = ({ buscador }) => {
  const { filtro, setFiltro } = useContext(ContextGlobal);

  const handleFiltroChange = (e) => {
    const buscadorValue = e.target.value;
    setFiltro(buscadorValue);
    buscador(buscadorValue);
  };

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        placeholder="Busca por nombre o característica"
        value={filtro}
        onChange={handleFiltroChange}
        className="form-control"
      />
      <div className="input-group-append">
        <button className="btn btn-outline-secondary" type="button">
          Buscar
        </button>
      </div>
    </div>
  );
};

export default Input;