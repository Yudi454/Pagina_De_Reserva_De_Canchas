import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import axios from "axios";

const MainMisReservas = ({ show, onHide }) => {
  const [usuario, setUsuario] = useState(3);
  const [reservas, setReservas] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/canchas/misReservas?usuario=${usuario}`)
      .then((response) => {
        setReservas(response.data);
        console.log("esta es la reserva:", response.data);
      })
      .catch((error) => {
        console.error("error al traer las reservas:", error);
      });
  }, []);

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Mis Reservas</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>Reservas realizadas:</h5>
        {reservas.length === 0 ? (
          <p>No hay reservas.</p>
        ) : (
          <ul>
            {reservas.map((reserva, index) => (
              <li key={index}>
                Cancha: {reserva.tipo_cancha} — Total: ${reserva.precio_cancha} — Dia:{reserva.dia_reserva.slice(0, 10)} — Horario: {reserva.hora_fin}/{reserva.hora_fin}
              </li>
            ))}
          </ul>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MainMisReservas;
