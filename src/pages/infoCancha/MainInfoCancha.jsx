import Container from "react-bootstrap/esm/Container";
import Image from "react-bootstrap/Image";
import Calendario from "./Calendario";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/esm/Col";

const MainInfoCancha = () => {
  return (
    <Container>
      <Row className="align-items-center">
        <Col md={4} className="d-flex justify-content-center">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_hCJ00ytDGrDTDXldjA5iiJnC3hH9yx9LDQ&s"
            fluid
            rounded
            className="w-75"
          />
        </Col>
        <Col md={8}>
          <Card style={{ backgroundColor: "#E5EAF0" }}>
            <Card.Body className="d-flex flex-column align-items-center text-center">
              <Card.Title className="mb-3">Tipo de Cancha</Card.Title>
              <Card.Title className="mb-3">Precio: $$$$</Card.Title>
              <Card.Title className="mb-3">Horario</Card.Title>
              <Calendario />
              <Form.Group className="mt-3">
                <Form.Label>Desde:</Form.Label>
                <Form.Control
                  className="rounded-pill"
                  type="text"
                  placeholder="Horario"
                />
                <Form.Label className="mt-3">Hasta:</Form.Label>
                <Form.Control
                  className="rounded-pill"
                  type="text"
                  placeholder="Horario"
                />
              </Form.Group>
              <Button
                className="mt-3"
                style={{ backgroundColor: "#45BF55", borderColor: "#FFC04D" }}
              >
                Reservar
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MainInfoCancha;
