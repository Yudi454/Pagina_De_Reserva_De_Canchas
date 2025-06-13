import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const MainMisReservas = ({show, onHide}) => {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Mis Reservas</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>reservas realizadas</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default MainMisReservas