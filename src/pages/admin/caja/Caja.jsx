import MainCaja from "./MainCaja";
import NavAdmin from "../NavAdmin";
import { Col, Row } from "react-bootstrap";

const Caja = () => {
  return (
    <>
      <Row>
        <Col>
          <NavAdmin />
        </Col>
        <Col>
          <MainCaja />
        </Col>
      </Row>
    </>
  );
};

export default Caja;
