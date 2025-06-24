import { Col, Row } from "react-bootstrap";
import MainProveedores from "./MainProveedores";
import NavAdmin from "../NavAdmin";
import { useEffect, useState } from "react";
import {
  deleteDato,
  getDato,
  getDatos,
  updateDato,
} from "../../../customHooks/UseApi";
import { URLPROVEEDORES } from "../../../routes/Rutas";
import VerDatoAdmin from "../../../components/verDatoAdmin/VerDatoAdmin";
import { set } from "react-hook-form";
import ProveedoresEditar from "./ProveedoresEditar";

const Proveedores = () => {
  const [proveedores, setProveedores] = useState();

  const [proveedor, setProveedor] = useState();

  const [mostrarVer, setMostrarVer] = useState();

  const [mostrarEditar, setMostrarEditar] = useState();

  useEffect(() => {
    getDatos(URLPROVEEDORES, setProveedores);
  }, []);

  const handleVer = (id) => {
    setMostrarVer(true);
    setMostrarEditar(false);
    getDato(URLPROVEEDORES, id, setProveedor);
  };

  const handleEditar = (id) => {
    setMostrarVer(false);
    setMostrarEditar(true);
    getDato(URLPROVEEDORES, id, setProveedor);
  };

  const handleDelete = (id) => {
    deleteDato(URLPROVEEDORES, id, setProveedores);
  };

  const handleSubmit = (e) => {
    console.log(proveedor);
    try {
      e.preventDefault();
      updateDato(URLPROVEEDORES, proveedor, setProveedores);
      setMostrarEditar(false);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <>
      <Row>
        <Col>
          <NavAdmin />
        </Col>
        <Col>
          <MainProveedores
            proveedores={proveedores}
            handleVer={handleVer}
            handleEditar={handleEditar}
            handleDelete={handleDelete}
          />
        </Col>
        {mostrarVer && (
          <Col>
            <VerDatoAdmin setMostrarVer={setMostrarVer} dato={proveedor} />
          </Col>
        )}
        {mostrarEditar && (
          <Col>
            <ProveedoresEditar
              setMostrarEditar={setMostrarEditar}
              proveedor={proveedor}
              setProveedor={setProveedor}
              handleSubmit={handleSubmit}
            />
          </Col>
        )}
      </Row>
    </>
  );
};

export default Proveedores;
