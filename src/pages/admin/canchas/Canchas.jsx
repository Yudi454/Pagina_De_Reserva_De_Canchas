import { Col, Row } from "react-bootstrap";
import MainCanchas from "./MainCanchas";
import NavAdmin from "../NavAdmin";

const Canchas = () => {
  return (
    <>
      <Row>
        <Col>
          <NavAdmin />
        </Col>
        <Col>
          <MainCanchas />
        </Col>
      </Row>
    </>
  );
};

export default Canchas;
