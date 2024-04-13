import React, { useState } from "react";
import Modal from "./Modal";
import Formulario from "./Formulario";
import swal from 'sweetalert'



const Contenedor = ({ productos, elminarP, agregarEditarP, productosI}) => {
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


                  <div className="Editar">
                  <button
                    className="btn btn-primary" onClick={() => setMostrar(producto.id)} >Editar</button>
                  <Modal isOpen={mostrar === producto.id} onClose={() => setMostrar(false)}>

                    <Formulario title="Aqui puedes editar tu producto" agregarEditarP={agregarEditarP} productosI={productosI} idProducto={producto.id} />
                
                  </Modal>
                  </div>                  
                  <div className="Eliminar">
                  <button className="btn btn-danger" onClick={() => elminarP(producto.id)}>Eliminar</button> 
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