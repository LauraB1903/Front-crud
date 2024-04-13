import React, { useState } from 'react';
// import "./Style/formulario.css"

function Formulario({ agregarEditarRegistro, productosI,idProducto,title }) {


    const [id, setId] = useState(idProducto);
    const [nombre, setNombre] = useState('');
    const [caracteristicas, setCaracteristicas] = useState('');

    const Editar = (event) => {
      event.preventDefault();
  
      if (id.trim() === '' || nombre.trim() === '' || caracteristicas.trim() === '') {
        swal({
            title: "Por favor complete todos los campos.",
            icon: "error",
        });
        return;
    }
  
    const index = productosI.findIndex((productos) => productos.id === id);
    if (index !== -1) {
        const nuevosRegistros = [...productosI];
        nuevosRegistros[index] = { id, nombre, caracteristicas };
        agregarEditarRegistro(nuevosRegistros);
        swal({
            title: "Operación realizada con éxito",
            text: "El registro se ha actualizado correctamente.",
            icon: "success",
        });
    } else {
        agregarEditarRegistro([...productosI, { id, nombre, caracteristicas }]);
        swal({
            title: "Operación realizada con éxito",
            text: "El registro se ha agregado correctamente.",
            icon: "success",
        });
    }
  
      setId('');
      setNombre('');
      setCaracteristicas('');
  };


    return (
        <div>
            <h4>{title}</h4>
            <form className='d-flex flex-column align-items-center justify-content-center gap-4' onSubmit={Editar}>
                <input
                    type="text"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    placeholder="Id"
                />
                <input
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder="Nombre"
                />
                <input
                    type="text"
                    value={caracteristicas}
                    onChange={(e) => setCaracteristicas(e.target.value)}
                    placeholder="Características"
                />
                <button className='btn btn-primary' type="submit">Guardar</button>
            </form>
        </div>
    );
}

export default Formulario;