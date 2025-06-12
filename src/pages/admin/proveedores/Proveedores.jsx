import { Col, Row } from "react-bootstrap";
import MainProveedores from "./MainProveedores";
import NavAdmin from "../NavAdmin";

const Proveedores = () => {
  return (
    <>
      <Row>
        <Col>
          <NavAdmin />
        </Col>
        <Col>
          <MainProveedores />
        </Col>
      </Row>
    </>
  );
};

export default Proveedores;
