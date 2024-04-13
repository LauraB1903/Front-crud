import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar los estilos de Bootstrap

const BotonC = ({ onClose }) => {
  return (
    <div>
      <button onClick={onClose} className="btn btn-primary">
        <ion-icon name="chevron-down-outline"></ion-icon>
      </button>
    </div>
  );
};

export default BotonC;