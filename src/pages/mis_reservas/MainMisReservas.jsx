import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import axios from "axios";


const MainMisReservas = ({ show, onHide, setValorModal }) => {
  const stored = localStorage.getItem("usuario");
  const user = stored ? JSON.parse(stored) : null;
  const [usuario, setUsuario] = useState();
  const [reservas, setReservas] = useState([]);

  



  useEffect(() => {
    if (show) {
      axios
        .get(`http://localhost:8000/reservas/misReservas/${user.id_cliente}`)
        .then((response) => {
          setReservas(response.data);
          setValorModal(response.data.length);
          console.log("Data que llega:", response.data);
          setReservas(response.data);
        })
        .catch((error) => {
          console.error("error al traer las reservas:", error);
        });
    }
  }, [show, usuario]);

  const handleEliminarReserva = (id_reserva) => {
    if (window.confirm("¿estas seguro que quieres eliminar la reserva?")) {
      axios
        .delete(`http://localhost:8000/reservas/delete/${id_reserva}`)
        .then(() => {
          setReservas((prev) => {
            const nuevas = prev.filter((r) => r.id_reserva !== id_reserva);
            setValorModal(nuevas.length);
            return nuevas;
          });
          alert("reserva eliminada con exito");
        })
        .catch((err) => {
          console.error("Error al eliminar la reserva front:", err);
        });
    }
  };

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
            {reservas.map((reserva, key) => (
              <li key={key} style={{ marginBottom: "15px" }}>
                <div>
                  <span>
                    <strong>Cancha:</strong> {reserva.tipo_cancha} -{" "}
                    <strong>Total:</strong> ${reserva.precio_cancha}
                  </span>
                </div>
                <div>
                  <span>
                    <strong>Dia:</strong> {reserva.dia_reserva.slice(0, 10)} -{" "}
                    <strong>Horario: </strong>
                    {reserva.hora_inicio.slice(0, 5)}/
                    {reserva.hora_fin.slice(0, 5)}
                  </span>
                  <Button
                    style={{ marginLeft: "20px" }}
                    variant="danger"
                    size="sm"
                    onClick={() => handleEliminarReserva(reserva.id_reserva)}
                  >
                    Eliminar
                  </Button>
                </div>
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
