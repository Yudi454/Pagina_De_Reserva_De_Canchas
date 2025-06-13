import { Col, Row } from "react-bootstrap";
import MainClientes from "./MainClientes";
import NavAdmin from "../NavAdmin";
import axios from "axios";
import { useEffect, useState } from "react";
import { getDato, getDatos } from "../../../customHooks/UseApi";
import { URLCLIENTES } from "../../../routes/Rutas";
import { handleVer } from "../../../customHooks/UseCrud";
import VerDatoAdmin from "../../../components/verDatoAdmin/VerDatoAdmin";

const Clientes = () => {
  const [clientes, setClientes] = useState();

  const [cliente, setCliente] = useState();

  const [mostrarVer, setMostrarVer] = useState(false);

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
            url={URLCLIENTES}
            setMostrar={setMostrarVer}
            setValor={setCliente}
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
      </Row>
    </>
  );
};

export default Clientes;
