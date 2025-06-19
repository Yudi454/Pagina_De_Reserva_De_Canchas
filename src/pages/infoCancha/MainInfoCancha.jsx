import Container from "react-bootstrap/esm/Container";
import Image from "react-bootstrap/Image";
import Calendario from "./Calendario";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/esm/Col";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const MainInfoCancha = () => {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">LOGO</Navbar.Brand>
          <Nav>
            <Nav.Link href="/info-usuario">Usuario</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
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
                <Card.Text className="mb-3">Precio: $$$$</Card.Text>
                <Card.Text className="mb-3">Reserva tu Turno</Card.Text>
                <Calendario />
                <Form.Group className="mt-3">
                  <Form.Label>Desde:</Form.Label>
                  <Form.Select className="rounded-pill">
                    <option value="">Selecciona hora de Comienzo</option>
                    <option value="08:00">14:00</option>
                    <option value="09:00">15:00</option>
                    <option value="10:00">16:00</option>
                    <option value="10:00">17:00</option>
                    <option value="10:00">18:00</option>
                    <option value="10:00">19:00</option>
                    <option value="10:00">20:00</option>
                    <option value="10:00">21:00</option>
                  </Form.Select>
                  <Form.Label className="mt-3">Hasta:</Form.Label>
                  <Form.Select className="rounded-pill">
                    <option value="">Selecciona hora de Fin</option>
                    <option value="09:00">15:00</option>
                    <option value="10:00">16:00</option>
                    <option value="10:00">17:00</option>
                    <option value="10:00">18:00</option>
                    <option value="10:00">19:00</option>
                    <option value="10:00">20:00</option>
                    <option value="10:00">21:00</option>
                    <option value="10:00">22:00</option>
                  </Form.Select>
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
    </div>
  );
};

export default MainInfoCancha;
