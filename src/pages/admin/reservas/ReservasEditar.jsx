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
    <>
      <Button onClick={() => setMostrarEditar(false)}>X</Button>
      <h3>Crear</h3>
      {reserva && (
        <Form onSubmit={handleSubmit(handleEditarReserva)}>
          <Form.Group>
            <Form.Label>Email-Cliente</Form.Label>
            <Form.Control
            value={reserva.email_cliente}
              name="email_cliente"
              onChange={(e) =>
                setReserva({ ...reserva, [e.target.name]: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Id_cancha</Form.Label>
            <Form.Control
            value={reserva.id_cancha}
              name="id_cancha"
              onChange={(e) =>
                setReserva({ ...reserva, [e.target.name]: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Total</Form.Label>
            <Form.Control
            value={reserva.total_reserva}
              name="total_reserva"
              onChange={(e) =>
                setReserva({ ...reserva, [e.target.name]: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Dia</Form.Label>
            <Form.Control
            value={reserva.dia_reserva}
              name="dia_reserva"
              onChange={(e) =>
                setReserva({ ...reserva, [e.target.name]: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Horario</Form.Label>
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
          <Button onClick={buscarHorarios}>Buscar Horarios</Button>
          <Button type="submit">Editar</Button>
        </Form>
      )}
    </>
  );
};

export default ReservasEditar;
