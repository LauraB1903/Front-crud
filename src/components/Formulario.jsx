import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap
import swal from 'sweetalert'; // Importa SweetAlert 

function Formulario({ agregarEditarP, productosI, idProducto, title }) {
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
      const registrosN = [...productosI];
      registrosN[index] = { id, nombre, caracteristicas };
      agregarEditarP(registrosN);
      swal({
        title: "Operación realizada con éxito",
        text: "El producto se ha agregado correctamente.",
        icon: "success",
      });
    } else {
      agregarEditarP([...productosI, { id, nombre, caracteristicas }]);
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
          className="form-control" // Agrega la clase de Bootstrap para el estilo del input
        />
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Nombre"
          className="form-control" // Agrega la clase de Bootstrap para el estilo del input
        />
        <input
          type="text"
          value={caracteristicas}
          onChange={(e) => setCaracteristicas(e.target.value)}
          placeholder="Características"
          className="form-control" // Agrega la clase de Bootstrap para el estilo del input
        />
        <button className='btn btn-primary' type="submit">Guardar</button>
      </form>
    </div>
  );
}

export default Formulario;