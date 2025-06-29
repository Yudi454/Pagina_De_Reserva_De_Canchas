import { Col, Row } from "react-bootstrap";
import MainProductos from "./MainProductos";
import NavAdmin from "../NavAdmin";
import { useEffect, useState } from "react";
import {
  deleteDato,
  getDato,
  getDatos,
  updateDato,
} from "../../../customHooks/UseApi";
import VerDatoAdmin from "../../../components/verDatoAdmin/VerDatoAdmin";
import ProductosEditar from "./ProductosEditar";
import { rutas } from "../../../routes/Rutas";

const Productos = () => {
  const [mostrarVer, setMostrarVer] = useState(false);

  const [mostrarEditar, setMostrarEditar] = useState(false);

  const [producto, setProducto] = useState();

  const [productos, setProductos] = useState();

  const API_ROUTE = import.meta.env.VITE_API_URL;

  const RUTA_PRODUCTOS = `${API_ROUTE}${rutas.productos}`;

  useEffect(() => {
    getDatos(RUTA_PRODUCTOS, setProductos);
  }, []);

  const handleVer = (id) => {
    setMostrarVer(true);
    setMostrarEditar(false);
    getDato(`${RUTA_PRODUCTOS}/${id}`, setProducto);
  };

  const handleEditar = (id) => {
    setMostrarVer(false);
    setMostrarEditar(true);
    getDato(`${RUTA_PRODUCTOS}/${id}`, setProducto);
  };

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      updateDato(`${RUTA_PRODUCTOS}/update/${producto.id_producto}`, producto);
      alert("Producto editado con exito")
      getDatos(RUTA_PRODUCTOS, setProductos);
      setMostrarEditar(false);
    } catch (error) {}
  };

  const handleDelete = (id) => {
    deleteDato(`${RUTA_PRODUCTOS}/delete/${id}`);
    getDatos(RUTA_PRODUCTOS, setProductos);
  };

  
  return (
    <>
      <Row>
        <Col>
          <NavAdmin />
        </Col>
        <Col>
          <MainProductos
            productos={productos}
            handleDelete={handleDelete}
            handleEditar={handleEditar}
            handleVer={handleVer}
          />
        </Col>
        {mostrarVer && (
          <Col>
            <VerDatoAdmin setMostrarVer={setMostrarVer} dato={producto} />
          </Col>
        )}
        {mostrarEditar && (
          <Col>
            <ProductosEditar
              producto={producto}
              handleSubmit={handleSubmit}
              setProducto={setProducto}
              setMostrarEditar={setMostrarEditar}
            />
          </Col>
        )}
      </Row>
    </>
  );
};

export default Productos;
