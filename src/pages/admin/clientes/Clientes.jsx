import { Col, Row } from "react-bootstrap";
import MainClientes from "./MainClientes";
import NavAdmin from "../NavAdmin";
import axios from "axios";
import { useEffect } from "react";
import { getDatos } from "../../../customHooks/UseApi";
import { URLCLIENTES } from "../../../routes/Rutas";

const Clientes = () => {

  

  useEffect(() => {
    getDatos(URLCLIENTES);
  },[]);

  return (
    <>
      <Row>
        <Col>
          <NavAdmin />
        </Col>
        <Col>
          <MainClientes />
        </Col>
      </Row>
    </>
  );
};

export default Clientes;
