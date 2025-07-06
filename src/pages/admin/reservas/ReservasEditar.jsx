import { faCartPlus, faMagnifyingGlass, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Form } from "react-bootstrap";

const ReservasEditar = ({
  reserva,
  horarios,
  setReserva,
  setMostrarEditar,
  handleEditarReserva,
  buscarHorarios,
  handleSubmit,
  register,
  errors,
}) => {
  return (
    <div className="d-flex flex-column align-items-center text-center">
      <Button onClick={() => setMostrarEditar(false)}>
        <FontAwesomeIcon icon={faTimes} size="lg" />
      </Button>
      <h3>Editar reserva</h3>
      {reserva && (
        <Form onSubmit={handleSubmit(handleEditarReserva)} className="d-flex flex-column align-items-center">
          <Form.Group>
            <Form.Label>Email-Cliente:</Form.Label>
            <Form.Control
              value={reserva.email_cliente}
              name="email_cliente"
              onChange={(e) =>
                setReserva({ ...reserva, [e.target.name]: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Id_cancha:</Form.Label>
            <Form.Control
              value={reserva.id_cancha}
              name="id_cancha"
              onChange={(e) =>
                setReserva({ ...reserva, [e.target.name]: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Total:</Form.Label>
            <Form.Control
              value={reserva.total_reserva}
              name="total_reserva"
              onChange={(e) =>
                setReserva({ ...reserva, [e.target.name]: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Dia:</Form.Label>
            <Form.Control
              value={reserva.dia_reserva}
              name="dia_reserva"
              onChange={(e) =>
                setReserva({ ...reserva, [e.target.name]: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Horario:</Form.Label>
            <Form.Control
              name="id_horario"
              as="select"
              onChange={(e) => {
                const horarioEncontrado = horarios.find(
                  (h) => `${h.hora_inicio}-${h.hora_fin}` === e.target.value
                );
                setReserva({
                  ...reserva,
                  horario_inicio: horarioEncontrado.hora_inicio,
                  horario_fin: horarioEncontrado.hora_fin,
                });
              }}
            >
              <option value="">Selecciona un horario</option>
              <option>{reserva.horario}</option>
              {horarios &&
                horarios.map((h) => (
                  <option key={h.id_horario}>
                    {h.hora_inicio}-{h.hora_fin}
                  </option>
                ))}
            </Form.Control>
          </Form.Group>
          <div className="mt-4 mb-3">
            <Button onClick={buscarHorarios} className="me-4">
              Buscar Horarios
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="icon-admin"
              />
            </Button>
            <Button type="submit">
              Editar
              <FontAwesomeIcon icon={faCartPlus} className="icon-admin" />
            </Button>
          </div>
        </Form>
      )}
    </div>
  );
};

export default ReservasEditar;
