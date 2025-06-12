import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Cards from "./Cards";
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

const MainReservar = () => {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">LOGO</Navbar.Brand>
          <Nav>
            <Nav.Link href="/mis-reservas">
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
    </div>
  );
};

export default MainReservar;
