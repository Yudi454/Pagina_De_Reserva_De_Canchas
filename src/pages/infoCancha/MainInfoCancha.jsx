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
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const MainInfoCancha = () => {
  const [cancha, setCancha] = useState([]);
  const [turnos, setTurnos] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/canchas/InfoCancha/${id}`)
      .then((response) => {
        setCancha(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("error al traer la cancha:", error);
      });
  }, [id]);

  const handleFecha = (fecha) => {
    setFechaCargada(fecha)
    axios
      .get(`http://localhost:8000/canchas/InfoCancha/${id}/turnos`, {
        params: { fecha },
      })
      .then((res) => {
        setTurnos(res.data);
      })
      .catch((err) => console.error("Error al traer turnos:", err));
  };

  const [fechaCargada, setFechaCargada]= useState("")
  const [horarioInicio, setHorarioInicio]=useState("")
  const [horarioFin, setHorarioFin]=useState("")


  const handleReservas=()=>{
    const nuevaReserva={
      id_cancha:id,
      id_usuario:3, //ejemeplo de id de usuario
      precio:cancha.precio_cancha,
      dia_reserva: fechaCargada,
      horario_inicio:horarioInicio,
      horario_fin:horarioFin,
    }

    axios
    .post("http://localhost:8000/canchas/reservas",nuevaReserva)
    .then((res)=>alert("reserva realizada con exito"))
    .catch((err)=>alert("a ocurrido un error:" ,err));
    
  }

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
                <Card.Title className="mb-3">
                  Cancha:{cancha.tipo_cancha}
                </Card.Title>
                <Card.Text className="mb-3">
                  Precio: ${cancha.precio_cancha}
                </Card.Text>
                <Card.Text className="mb-3">Reserva tu Turno</Card.Text>
                <Calendario handleFecha={handleFecha}/>
                <Form.Group className="mt-3">
                  <Form.Label>Desde:</Form.Label>
                  <Form.Select className="rounded-pill" onChange={(e)=>setHorarioInicio(e.target.value)}>
                    {turnos.map((turno) => (
                      <option key={turno.id_horario} value={turno.hora_inicio}>
                        {turno.hora_inicio}
                      </option>
                    ))}
                  </Form.Select>
                  <Form.Label className="mt-3">Hasta:</Form.Label>
                  <Form.Select className="rounded-pill" onChange={(e)=>setHorarioFin(e.target.value)}>
                    {turnos.map((turno) => (
                      <option key={turno.id_horario} value={turno.hora_fin}>
                        {turno.hora_fin}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
                <Button
                  className="mt-3"
                  style={{ backgroundColor: "#45BF55", borderColor: "#FFC04D" }}
                  onClick={handleReservas}
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
