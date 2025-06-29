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
import { rutas, URLPROVEEDORES } from "../../../routes/Rutas";
import VerDatoAdmin from "../../../components/verDatoAdmin/VerDatoAdmin";
import { set } from "react-hook-form";
import ProveedoresEditar from "./ProveedoresEditar";

const Proveedores = () => {
  const [proveedores, setProveedores] = useState();

  const [proveedor, setProveedor] = useState();

  const [mostrarVer, setMostrarVer] = useState();

  const [mostrarEditar, setMostrarEditar] = useState();

  const API_ROUTE = import.meta.env.VITE_API_URL;

  const RUTA_PROVEEDORES = `${API_ROUTE}${rutas.proveedores}`;

  useEffect(() => {
    getDatos(RUTA_PROVEEDORES, setProveedores);
  }, []);

  const handleVer = (id) => {
    setMostrarVer(true);
    setMostrarEditar(false);
    getDato(`${RUTA_PROVEEDORES}/${id}`, setProveedor);
  };

  const handleEditar = (id) => {
    setMostrarVer(false);
    setMostrarEditar(true);
    getDato(`${RUTA_PROVEEDORES}/${id}`, setProveedor);
  };

  const handleDelete = (id) => {
    deleteDato(`${RUTA_PROVEEDORES}/delete/${id}`);
    getDatos(RUTA_PROVEEDORES, setProveedores);
  };

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      updateDato(
        `${RUTA_PROVEEDORES}/update/${proveedor.id_proveedor}`,
        proveedor
      );
      alert("Se actualizo el proveedor con exito");
      getDatos(RUTA_PROVEEDORES,setProveedores);
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
