import React from "react";
import { Button, Form } from "react-bootstrap";

const ReservasCrear = ({
  reserva,
  horarios,
  setReserva,
  setMostrarCrear,
  handleCrearReserva,
  buscarHorarios,
  handleSubmit,
  register,
  errors,
}) => {
  return (
    <>
      <Button onClick={() => setMostrarCrear(false)}>X</Button>
      <h3>Crear</h3>
      <Form onSubmit={handleSubmit(handleCrearReserva)}>
        <Form.Group>
          <Form.Label>Email-Cliente</Form.Label>
          <Form.Control
            name="email_cliente"
            onChange={(e) =>
              setReserva({ ...reserva, [e.target.name]: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Id_cancha</Form.Label>
          <Form.Control
            name="id_cancha"
            onChange={(e) =>
              setReserva({ ...reserva, [e.target.name]: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Dia</Form.Label>
          <Form.Control
            name="fecha_reserva"
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
               setReserva({ ...reserva, [e.target.name]: horarioEncontrado.id_horario })
            }}
          >
            <option value="">Selecciona un horario</option>
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
    </>
  );
};

export default ReservasCrear;
