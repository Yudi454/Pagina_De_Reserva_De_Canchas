import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Cards from "./Cards";
import Badge from "react-bootstrap/Badge";
import MainMisReservas from "../mis_reservas/MainMisReservas";
import { useEffect } from "react";
import axios from "axios";

const MainReservar = () => {
  const [mostrarModal, setMostrarModal] = useState(false);
  const [canchas, setCanchas] = useState([]);
  const [valorModal, setValorModal] = useState("")

  useEffect(() => {
    axios
      .get("http://localhost:8000/canchas")
      .then((response) => {
        setCanchas(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.error("error al traer las canchas:", error);
      });
  }, []);

  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">LOGO</Navbar.Brand>
          <Nav>
            <Nav.Link onClick={() => setMostrarModal(true)}>
              Mis Reservas <Badge bg="secondary">{valorModal}</Badge>
            </Nav.Link>
            <Nav.Link href="/info-usuario">Usuario</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      <Container className="d-flex flex-wrap justify-content-center gap-4">
        {canchas.map((cancha) => (
          <Cards
            key={cancha.id_cancha}
            tipo_cancha={cancha.tipo_cancha}
            precio_cancha={cancha.precio_cancha}
            id_cancha={cancha.id_cancha}
          />
        ))}
      </Container>
      <MainMisReservas setValorModal={setValorModal}
        show={mostrarModal}
        onHide={() => setMostrarModal(false)}
      />
    </div>
  );
};

export default MainReservar;
