import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Cards from "./Cards";

const MainReservar = () => {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">LOGO</Navbar.Brand>
          <Nav>
            <Nav.Link href="#home">Mis Reservas</Nav.Link>
            <Nav.Link href="#features">Usuario</Nav.Link>
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
