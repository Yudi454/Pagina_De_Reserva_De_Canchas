import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Cards from "./Cards";
import Badge from "react-bootstrap/Badge";
import MainMisReservas from "../mis_reservas/MainMisReservas";
import { useEffect } from "react";
import axios from "axios";
import { useStore } from "../../store/AuthStore";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const MainReservar = () => {
  const [mostrarModal, setMostrarModal] = useState(false);
  const [canchas, setCanchas] = useState([]);
  const [valorModal, setValorModal] = useState(0);

  const { color } = useStore();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8000/canchas")
      .then((response) => {
        setCanchas(response.data);
      })
      .catch((error) => {
        console.error("error al traer las canchas:", error);
      });
  }, []);

  useEffect(() => {
  const stored = localStorage.getItem("usuario");
  const user = stored ? JSON.parse(stored) : null;

  if (user) {
    axios
      .get(`http://localhost:8000/reservas/misReservas/${user.id_cliente}`)
      .then((response) => {
        setValorModal(response.data.length);
      })
      .catch((error) => {
        console.error("error al traer cantidad de reservas:", error);
      });
  }
}, []);

  return (
<<<<<<< Updated upstream
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Nav>
            <Nav.Link onClick={() => setMostrarModal(true)}>
              Mis Reservas <Badge bg="secondary">{valorModal}</Badge>
            </Nav.Link>
            <Nav.Link href="/info-usuario">Usuario</Nav.Link>
          </Nav>
=======
    <div className={color === "Claro" ? "modo-claro" : "modo-oscuro"}>
      <div style={{ paddingTop: "17vh" }}>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand
              onClick={() => navigate("/")}
              style={{ cursor: "pointer" }}
            >
              <FaArrowLeft style={{ marginRight: "5px" }} />
              Volver
            </Navbar.Brand>
            <Nav>
              <Nav.Link onClick={() => setMostrarModal(true)}>
                Mis Reservas <Badge bg="secondary">{valorModal}</Badge>
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <br />
        <Container className="d-flex flex-wrap justify-content-center gap-4">
          {canchas.map((cancha) => (
            <Cards
              key={cancha.id_cancha}
              imagen_cancha={cancha.imagen_cancha}
              tipo_cancha={cancha.tipo_cancha}
              precio_cancha={cancha.precio_cancha}
              id_cancha={cancha.id_cancha}
            />
          ))}
>>>>>>> Stashed changes
        </Container>
        <MainMisReservas
          setValorModal={setValorModal}
          show={mostrarModal}
          onHide={() => setMostrarModal(false)}
        />
      </div>
    </div>
  );
};

export default MainReservar;
