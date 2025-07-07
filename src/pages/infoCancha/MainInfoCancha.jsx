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
import { useNavigate, useParams } from "react-router-dom";
import { useStore } from "../../store/AuthStore";
import { FaArrowLeft } from "react-icons/fa";
import Toast from "react-bootstrap/Toast";

const MainInfoCancha = () => {
  const carrito = useStore((state) => state.carritoReservas);
  const agregarReserva = useStore((state) => state.agregarReserva);
  const stored = localStorage.getItem("usuario");
  const user = stored ? JSON.parse(stored) : null;
  const [cancha, setCancha] = useState({});
  const [turnos, setTurnos] = useState([]);
  const [fechaCargada, setFechaCargada] = useState("");
  const [horarioSeleccionado, setHorarioSeleccionado] = useState("");
  const [mostrarToast, setMostrarToast] = useState(false);
  const [reservaConfirmada, setReservaConfirmada] = useState(null);

  const navigate = useNavigate();
  const { color } = useStore();

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/canchas/${id}`)
      .then((response) => {
        setCancha(response.data.results);
      })
      .catch((error) => {
        console.error("error al traer la cancha:", error);
      });
  }, [id]);

  const handleFecha = (fecha) => {
    setFechaCargada(fecha);
    axios
      .get(`http://localhost:8000/reservas/${id}/turnos`, {
        params: { fecha },
      })
      .then((res) => {
        setTurnos(res.data);
      })
      .catch((err) => console.error("Error al traer turnos:", err));
  };

  const handleReservas = () => {
    if (!user) {
      alert("Debes iniciar sesión para reservar.");
      return;
    }

    if (!fechaCargada || !horarioSeleccionado) {
      alert("Seleccioná una fecha y un horario.");
      return;
    }

    const nuevaReserva = {
      fecha_reserva: fechaCargada,
      email_cliente: user.email_cliente,
      id_cancha: id,
      id_horario: horarioSeleccionado,
    };

    axios
      .post("http://localhost:8000/reservas/create", nuevaReserva)
      .then(() => {
        setReservaConfirmada(nuevaReserva);
        setMostrarToast(true);
      })
      .catch((err) => {
        console.error("Error al crear reserva:", err);
        alert("Ocurrió un error al crear la reserva.");
      });
  };

  const handleCarrito = () => {
    if (!user) {
      alert("Debes iniciar sesión para reservar.");
      return;
    }

    if (!fechaCargada || !horarioSeleccionado) {
      alert("Seleccioná una fecha y un horario.");
      return;
    }

    const horarioEncontrado = turnos.filter(
      (t) => String(t.id_horario) === String(horarioSeleccionado)
    );


    const horario = `${horarioEncontrado[0].hora_inicio}-${horarioEncontrado[0].hora_fin}`;

    

    const nuevaReserva = {
      fecha_reserva: fechaCargada,
      id_cliente: user.id_cliente,
      id_cancha: id,
      id_horario: horarioSeleccionado,
      horario: horario,
    };

    agregarReserva(nuevaReserva);

    let carritoFinal = [];

    if (localStorage.getItem("carritoReservas")) {
      carritoFinal = JSON.parse(localStorage.getItem("carritoReservas"));
    }

    carritoFinal.push(nuevaReserva);

    localStorage.setItem("carritoReservas", JSON.stringify(carritoFinal));

    navigate("/reservar-Cancha");
  };

  return (
    <div
      className={color === "Claro" ? "modo-claro" : "modo-oscuro"}
      style={{ paddingTop: "17vh" }}
    >
      <Toast
        onClose={() => {
          setMostrarToast(false);
          navigate("/reservar-Cancha");
        }}
        show={mostrarToast}
        delay={5000}
        autohide
        style={{
          position: "fixed",
          top: 20,
          right: 20,
          minWidth: "250px",
          backgroundColor: "#d1e7dd",
          border: "1px solid #0f5132",
          color: "#0f5132",
          zIndex: 9999,
        }}
      >
        <Toast.Header>
          <strong className="me-auto">Reserva Confirmada</strong>
        </Toast.Header>
        <Toast.Body>
          Cancha: {cancha.tipo_cancha} <br />
          Fecha: {reservaConfirmada?.fecha_reserva} <br />
          Precio: ${cancha.precio_cancha}
        </Toast.Body>
      </Toast>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand
            onClick={() => navigate("/reservar-Cancha")}
            style={{ cursor: "pointer" }}
          >
            <FaArrowLeft style={{ marginRight: "5px" }} />
            Volver
          </Navbar.Brand>
        </Container>
      </Navbar>

      <Container>
        <Row className="align-items-center">
          <Col md={4} className="d-flex justify-content-center">
            <Image
              src={cancha.imagen}
              fluid
              rounded
              className="w-100"
              alt="Imagen de la cancha"
            />
          </Col>
          <Col md={8}>
            <Card style={{ backgroundColor: "#E5EAF0" }}>
              <Card.Body className="d-flex flex-column align-items-center text-center">
                <Card.Title className="mb-3">
                  Cancha: {cancha.tipo_cancha}
                </Card.Title>
                <Card.Text className="mb-3">
                  Precio: ${cancha.precio_cancha}
                </Card.Text>
                <Card.Text className="mb-3">Reserva tu Turno</Card.Text>

                <Calendario handleFecha={handleFecha} />

                {turnos.length === 0 && fechaCargada && (
                  <p className="text-danger mt-3">
                    No hay turnos disponibles para esta fecha.
                  </p>
                )}

                {turnos.length > 0 && (
                  <Form.Group className="mt-3 w-75">
                    <Form.Label>Turno:</Form.Label>
                    <Form.Select
                      className="rounded-pill"
                      onChange={(e) => setHorarioSeleccionado(e.target.value)}
                    >
                      <option value="">Seleccioná un horario</option>
                      {turnos.map((turno) => (
                        <option key={turno.id_horario} value={turno.id_horario}>
                          {turno.hora_inicio.slice(0, 5)} -{" "}
                          {turno.hora_fin.slice(0, 5)}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                )}

                <Button
                  className="mt-3"
                  style={{
                    backgroundColor: "#45BF55",
                    borderColor: "#FFC04D",
                  }}
                  onClick={handleReservas}
                >
                  Reservar
                </Button>
                <Button onClick={handleCarrito}>Agregar al carrito</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MainInfoCancha;
