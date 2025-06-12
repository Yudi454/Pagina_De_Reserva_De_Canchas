import { Col, Row } from "react-bootstrap";
import MainHorarios from "./MainHorarios";
import NavAdmin from "../NavAdmin";

const Horarios = () => {
  return (
    <>
      <Row>
        <Col>
          <NavAdmin />
        </Col>
        <Col>
          <MainHorarios />
        </Col>
      </Row>
    </>
  );
};

export default Horarios;
