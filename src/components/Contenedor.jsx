import React, { useState } from "react";
// import "./Style/contenedor.css";
import Modal from "./Modal";
import Formulario from "./Formulario";
import swal from 'sweetalert'
import Swal from 'sweetalert2';


const Contenedor = ({ productos, eliminarProducto, agregarEditarRegistro, productosI}) => {
  const [mostrar, setMostrar] = useState(false);
  const [] = useState(false);


  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Nombre</th>
            <th scope="col">Carateristicas</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <tr key={producto.id}>
              <th scope="row">{producto.id}</th>
              <td>{producto.nombre}</td>
              <td>{producto.caracteristicas}</td>
              <td>
                <div className="d-flex gap-2 align-items-center justify-content-center">


                  <div className="Actualizar">
                  <button
                    className="btn btn-primary"
                    onClick={() => setMostrar(producto.id)} 
                  >
                    <ion-icon name="build-outline"></ion-icon>
                  </button>
                  <Modal isOpen={mostrar === producto.id} onClose={() => setMostrar(false)}>

                    <Formulario title="Formulario de Actualizar" agregarEditarRegistro={agregarEditarRegistro} productosI={productosI} idProducto={producto.id} />
                
                  </Modal>
                  </div>                  
                  <div className="Eliminar">
                  <button className="btn btn-danger" onClick={() => eliminarProducto(producto.id)}><ion-icon name="person-remove-outline"></ion-icon></button> 
                  </div>

                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Contenedor;