import React from 'react';

const BotonC = ({onClose}) => {
    return (
        <div>
            <button onClick={onClose} className='btn btn-danger'><ion-icon name="chevron-down-outline"></ion-icon></button>
        </div>
    );
}

export default BotonC;