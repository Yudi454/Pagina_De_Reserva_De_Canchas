import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Cards from "./Cards";
import Badge from 'react-bootstrap/Badge';
import MainMisReservas from "../mis_reservas/MainMisReservas";


const MainReservar = () => {

  const [mostrarModal, setMostrarModal] = useState(false);

  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">LOGO</Navbar.Brand>
          <Nav>
            <Nav.Link onClick={() => setMostrarModal(true)}>
              Mis Reservas <Badge bg="secondary">1</Badge>
            </Nav.Link>
            <Nav.Link href="/info-usuario">Usuario</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      <Container className="d-flex flex-wrap justify-content-center gap-4">
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
      </Container>
      <MainMisReservas show={mostrarModal} onHide={() => setMostrarModal(false)} />
    </div>
  );
};

export default MainReservar;
