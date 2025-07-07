import {
  faFileSignature,
  faMagnifyingGlass,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
    <div className="d-flex flex-column align-items-center text-center">
      <button className="admin-button" onClick={() => setMostrarCrear(false)}>
        <FontAwesomeIcon icon={faTimes} size="lg" />
      </button>
      <h3>Crear reserva</h3>
      <Form
        onSubmit={handleSubmit(handleCrearReserva)}
        className="d-flex flex-column align-items-center"
      >
        <Form.Group>
          <Form.Label>Email-Cliente:</Form.Label>
          <Form.Control
            name="email_cliente"
            onChange={(e) =>
              setReserva({ ...reserva, [e.target.name]: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Id_cancha:</Form.Label>
          <Form.Control
            name="id_cancha"
            onChange={(e) =>
              setReserva({ ...reserva, [e.target.name]: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Dia:</Form.Label>
          <Form.Control
            name="fecha_reserva"
            onChange={(e) =>
              setReserva({ ...reserva, [e.target.name]: e.target.value })
            }
          />
        </Form.Group>
          <small className="form-text text-center">
            Ingrese una fecha en formato dia-mes-año
          </small>
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
                [e.target.name]: horarioEncontrado.id_horario,
              });
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
        <small className="form-text text-center">
          Clickea primero para buscar usuarios
          <br />Y luego selecciona un horario.
        </small>
        <div className="mt-3 mb-3">
          <button className="admin-button me-4" type="button" onClick={buscarHorarios}>
            Buscar Horarios
            <FontAwesomeIcon icon={faMagnifyingGlass} className="icon-admin" />
          </button>
          <button className="admin-button" type="submit">
            Crear reserva
            <FontAwesomeIcon className="icon-admin" icon={faFileSignature} />
          </button>
        </div>
      </Form>
    </div>
  );
};

export default ReservasCrear;
