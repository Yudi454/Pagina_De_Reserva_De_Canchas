import { Col, Row } from "react-bootstrap";
import MainReservas from "./MainReservas";
import NavAdmin from "../NavAdmin";

const Reservas = () => {
  return (
    <>
      <Row>
        <Col>
          <NavAdmin />
        </Col>
        <Col>
          <MainReservas />
        </Col>
      </Row>
    </>
  );
};

export default Reservas;
