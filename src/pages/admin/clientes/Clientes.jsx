import { Col, Row } from "react-bootstrap";
import MainClientes from "./MainClientes";
import NavAdmin from "../NavAdmin";
import axios from "axios";
import { useEffect, useState } from "react";
import { getDato, getDatos } from "../../../customHooks/UseApi";
import { URLCLIENTES } from "../../../routes/Rutas";
import { handleEditar, handleVer } from "../../../customHooks/UseCrud";
import VerDatoAdmin from "../../../components/verDatoAdmin/VerDatoAdmin";
import ClientesEditar from "./ClientesEditar";

const Clientes = () => {
  const [clientes, setClientes] = useState();

  const [cliente, setCliente] = useState();

  const [mostrarVer, setMostrarVer] = useState(false);

  const [mostrarEditar, setMostrarEditar] = useState(false);

  useEffect(() => {
    getDatos(URLCLIENTES, setClientes);
  }, []);

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
            url={URLCLIENTES}
            setMostrarVer={setMostrarVer}
            setValor={setCliente}
            setMostrarEditar={setMostrarEditar}
          />
        </Col>
        {mostrarVer && (
          <Col>
            <VerDatoAdmin
              mostrarVer={mostrarVer}
              setMostrarVer={setMostrarVer}
              cliente={cliente}
            />
          </Col>
        )}
        {mostrarEditar && (
          <Col>
            <ClientesEditar cliente={cliente} setCliente={setCliente} />
          </Col>
        )}
      </Row>
    </>
  );
};

export default Clientes;
