import { Col, Row } from "react-bootstrap";
import MainProductos from "./MainProductos";
import NavAdmin from "../NavAdmin";

const Productos = () => {
  return (
    <>
      <Row>
        <Col>
          <NavAdmin />
        </Col>
        <Col>
          <MainProductos />
        </Col>
      </Row>
    </>
  );
};

export default Productos;
