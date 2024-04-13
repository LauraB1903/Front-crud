import React from 'react';

const NumRegistros = ({ totalRegistros, productosTotales }) => {
  return (
    <div>
      <div>
        <p>Total registros: {totalRegistros} de {productosTotales}</p>
      </div>
    </div>
  );
}

export default NumRegistros;
