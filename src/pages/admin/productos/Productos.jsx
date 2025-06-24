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
import { URLPRODUCTOS } from "../../../routes/Rutas";
import VerDatoAdmin from "../../../components/verDatoAdmin/VerDatoAdmin";
import ProductosEditar from "./ProductosEditar";

const Productos = () => {
  const [mostrarVer, setMostrarVer] = useState(false);

  const [mostrarEditar, setMostrarEditar] = useState(false);

  const [producto, setProducto] = useState();

  const [productos, setProductos] = useState();

  useEffect(() => {
    getDatos(URLPRODUCTOS, setProductos);
  }, []);

  const handleVer = (id) => {
    setMostrarVer(true);
    setMostrarEditar(false);
    getDato(URLPRODUCTOS, id, setProducto);
  };

  const handleEditar = (id) => {
    setMostrarVer(false);
    setMostrarEditar(true);
    getDato(URLPRODUCTOS, id, setProducto);
  };

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      updateDato(URLPRODUCTOS, producto, setProductos);
      setMostrarEditar(false);
    } catch (error) {}
  };

  const handleDelete = (id) => {
    deleteDato(URLPRODUCTOS, id, setProductos);
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
