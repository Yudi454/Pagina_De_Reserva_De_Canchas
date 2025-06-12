import { Col, Row } from "react-bootstrap";
import MainUsuarios from "./MainUsuarios";
import NavAdmin from "../NavAdmin";

const Usuarios = () => {
  return (
    <>
      <Row>
        <Col>
          <NavAdmin />
        </Col>
        <Col>
          <MainUsuarios />
        </Col>
      </Row>
    </>
  );
};

export default Usuarios;
