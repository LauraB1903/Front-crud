import { useState, useContext } from "react";
import "./App.css";
import Contenedor from "./components/Contenedor";
import Input from "./components/Input";
import NumRegistros from "./components/NumRegistros";
import { ContexGlobal } from "./context/ContexGlobal";
import Modal from "./components/Modal";
import Formulario from "./components/Formulario";

function App() {
  const [mostrar, setMostrar] = useState(false);
  const [] = useState(false);

  const { filtro, setFiltro } = useContext(ContexGlobal);

  const [contador, setContador] = useState(5);

  const [productosI, setProductos] = useState([
    { id: "01", nombre: "Cafetera Nespresso Essenza Mini", caracteristicas: "Sistema de cápsulas, tamaño compacto, preparación de café espresso.." },
    { id: "02", nombre: "Maleta Samsonite Winfield 3 DLX", caracteristicas: "Material resistente a los impactos, ruedas giratorias 360º, cerradura TSA integrada." },
    { id: "03", nombre: "Purificador de aire Dyson Pure Cool TP04", caracteristicas: "Filtración HEPA, detección automática de contaminantes, conexión Wi-Fi.." },
    { id: "04", nombre: "Teclado mecánico Corsair K70 RGB MK.2", caracteristicas: " Interruptores Cherry MX, retroiluminación RGB, reposamuñecas desmontable." },
    { id: "05", nombre: "Licuadora NutriBullet Pro 900:", caracteristicas: "Potencia de 900 W, cuchillas de acero inoxidable, capacidad de 900 ml." },
    { id: "06", nombre: "Lámpara inteligente Philips Hue", caracteristicas: "Control por voz, cambio de color y tono de luz, programación de horarios." },
    { id: "07", nombre: "Plancha de vapor Rowenta DW5080", caracteristicas: "Potencia de 1700 W, suela Microsteam 400, sistema antigoteo." },
    { id: "08", nombre: "Mochila para portátil SwissGear Travel Gear 1900", caracteristicas: "Compartimento acolchado para portátil de hasta 17 pulgadas, múltiples bolsillos organizadores, material resistente al agua." },
    { id: "09", nombre: "Impresora multifunción HP", caracteristicas: "Impresión rápida de hasta 40 ppm, escaneo a doble cara, conexión Wi-Fi." },
    { id: "10", nombre: "Monitor gaming ASUS ROG Swift PG279Q", caracteristicas: "Panel IPS de 27 pulgadas, resolución 1440p, frecuencia de actualización de 165 Hz." },
    { id: "11", nombre: "Tableta Apple iPad Pro", caracteristicas: "Pantalla Liquid Retina XDR de 12.9 pulgadas, chip M1, compatibilidad con Apple Pencil y Magic Keyboard." },
    { id: "12", nombre: "Bicicleta eléctrica Xiaomi Mi Electric Bike Pro 2", caracteristicas: " Autonomía de 45 km, motor de 250 W, diseño plegable." },
    { id: "13", nombre: "Altavoz inteligente Amazon Echo Dot", caracteristicas: "Asistente virtual Alexa integrado, sonido mejorado, control de dispositivos domésticos." },
    { id: "14", nombre: "Robot aspirador iRobot Roomba i7+", caracteristicas: "Mapeo inteligente de la casa, vaciado automático de la suciedad, control por voz." },
    { id: "15", nombre: "Consola de videojuegos Xbox Series X", caracteristicas: "4K a 120 fps, SSD de 1 TB, retrocompatibilidad con juegos de Xbox One." },
    { id: "16", nombre: "Smart TV LG OLED C1", caracteristicas: "Pantalla OLED 4K de 55 pulgadas, procesador 9 Gen4 AI, soporte para Dolby Vision y Dolby Atmos." },
    { id: "17", nombre: "Cámara Sony Alpha a7 III", caracteristicas: "DSensor full-frame de 24.2 MP, estabilización de imagen de 5 ejes, grabación de video 4K." },
    { id: "18", nombre: "Auriculares inalámbricos Apple AirPods Pro", caracteristicas: "Cancelación activa de ruido, resistencia al agua IPX4, estuche de carga inalámbrica." },
    { id: "19", nombre: "Portátil Dell XPS 13", caracteristicas: "Procesador Intel Core i7, pantalla InfinityEdge 4K, peso ligero de 1.2 kg." },
    { id: "20", nombre: "Smartphone Samsung Galaxy S21", caracteristicas: "Pantalla AMOLED de 6.2 pulgadas, cámara principal de 64 MP, 8 GB de RAM." }
  ]);


  const buscador = (buscadorValue) => {
    setFiltro(buscadorValue);
  };



  const handleContadorChange = (e) => {
    setContador(Number(e.target.value));
  };


  const eliminarProducto = (id) => {
    const nuevoArray = [...productosI];
    const buscar = nuevoArray.findIndex((producto) => producto.id === id);
    console.log(buscar, "Mostrar");
    swal({
      title:"Eliminar",
      text:"Deseas Elimnar el Producto",
      icon:"warning",
      buttons:["No","Si"],
    }).then(respuesta=>{
      if(respuesta){
        nuevoArray.splice(buscar, 1);
        setProductos(nuevoArray);
        swal({text:"el archivo ha borrado con exito",
      icon:"success",timer:"2000"})
      }
    })
  };

  const opcionesContador = [5, 10, 15, 20,25];


  const agregarEditarRegistro = (nuevosRegistros) => {
    setProductos(nuevosRegistros);
};

  

  const productosFiltrados = productosI
    .filter(
      (producto) =>
        producto.id.includes(filtro) ||
        producto.nombre.toLowerCase().includes(filtro.toLowerCase()) ||
        producto.caracteristicas.toLowerCase().includes(filtro.toLowerCase())
    )
    .slice(0, contador);

  return (
    <div className="container d-flex flex-column gap-5 col-6 text-center justify-content-center align-items-center">
      <h1>Contenedor de productos</h1>

      <Input buscador={buscador}></Input>
      <div>
        <select value={contador} onChange={handleContadorChange}>
          {opcionesContador.map((opcion) => (
            <option key={opcion} value={opcion}>
              {opcion}
            </option>
          ))}
        </select>
      </div>
      <div className="contenedor">
        <Contenedor
        productos={productosFiltrados}
        eliminarProducto={eliminarProducto}
        agregarEditarRegistro={agregarEditarRegistro} 
        productosI={productosI}
        ></Contenedor>
      </div>
      <NumRegistros
        totalRegistros={productosFiltrados.length}
        personasTotales={productosI.length}
      />
      <div>



        <button
          onClick={() => setMostrar(true)}
          className="btn btn-primary d-flex align-items-center"
        >
          Agregar
        </button>
        <Modal isOpen={mostrar} onClose={() => setMostrar(false)}>
          <Formulario title="Formulario de Agregar" agregarEditarRegistro={agregarEditarRegistro} productosI={productosI}/>
        </Modal>
      </div>
    </div>
  );
}

export default App;