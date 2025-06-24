import { Col, Row } from "react-bootstrap";
import MainClientes from "./MainClientes";
import NavAdmin from "../NavAdmin";
import { useEffect, useState } from "react";
import {
  deleteDato,
  getDato,
  getDatos,
  updateDato,
} from "../../../customHooks/UseApi";
import { URLCLIENTES } from "../../../routes/Rutas";
import VerDatoAdmin from "../../../components/verDatoAdmin/VerDatoAdmin";
import ClientesEditar from "./ClientesEditar";
import axios from "axios";

const Clientes = () => {
  const [clientes, setClientes] = useState();

  const [cliente, setCliente] = useState();

  const [mostrarVer, setMostrarVer] = useState(false);

  const [mostrarEditar, setMostrarEditar] = useState(false);

  useEffect(() => {
    getDatos(URLCLIENTES, setClientes);
  }, []);

  const handleVer = (id) => {
    setMostrarVer(true);
    setMostrarEditar(false);
    getDato(URLCLIENTES, id, setCliente);
  };

  const handleEditar = (id) => {
    setMostrarVer(false);
    setMostrarEditar(true);
    getDato(URLCLIENTES, id, setCliente);
  };

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      updateDato(URLCLIENTES, cliente, setClientes);
      setMostrarEditar(false);
    } catch (error) {}
  };

  const handleDelete = (id) => {
    deleteDato(URLCLIENTES, id, setClientes);
  };

  return (
    <>
      <Row>
        <Col md={3}>
          <NavAdmin />
        </Col>
        <Col>
          <MainClientes
            clientes={clientes}
            handleVer={handleVer}
            handleEditar={handleEditar}
            handleDelete={handleDelete}
          />
        </Col>
        {mostrarVer && (
          <Col>
            <VerDatoAdmin setMostrarVer={setMostrarVer} dato={cliente} />
          </Col>
        )}
        {mostrarEditar && (
          <Col>
            <ClientesEditar
              cliente={cliente}
              setCliente={setCliente}
              handleSubmit={handleSubmit}
              setMostrarEditar={setMostrarEditar}
            />
          </Col>
        )}
      </Row>
    </>
  );
};

export default Clientes;
