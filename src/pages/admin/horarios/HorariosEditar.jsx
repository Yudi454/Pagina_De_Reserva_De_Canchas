import { faPenToSquare, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Form } from "react-bootstrap";

const HorariosEditar = ({
  horario,
  setHorario,
  setMostrarEditar,
  handleEditarHorario,
  handleSubmit,
  register,
  errors,
}) => {
  return (
    <div className="d-flex flex-column align-items-center text-center">
      <button
        className="admin-button-editar"
        onClick={() => setMostrarEditar(false)}
      >
        <FontAwesomeIcon icon={faTimes} size="lg" />
      </button>
      <h3 className="mt-3">Editar horario</h3>
      {horario && (
        <Form onSubmit={handleSubmit(handleEditarHorario)}>
          <Form.Group>
            <Form.Label>Hora de inicio:</Form.Label>
            <Form.Control
              value={horario.hora_inicio}
              name="hora_inicio"
              {...register("hora_inicio", {
                required: "La hora de inicio es obligatoria",
              })}
              onChange={(e) =>
                setHorario({ ...horario, [e.target.name]: e.target.value })
              }
            />
            {errors.hora_inicio && <p>{errors.hora_inicio.message}</p>}
            <small className="form-text text-center">
              Ingrese una hora en formato horas:minutos
            </small>
          </Form.Group>
          <Form.Group>
            <Form.Label>Hora de fin:</Form.Label>
            <Form.Control
              value={horario.hora_fin}
              name="hora_fin"
              {...register("hora_fin", {
                required: "La hora de fin es obligatoria",
              })}
              onChange={(e) =>
                setHorario({ ...horario, [e.target.name]: e.target.value })
              }
            />
            {errors.hora_fin && <p>{errors.hora_fin.message}</p>}
            <small className="form-text text-center">
              Ingrese una hora en formato horas:minutos
            </small>
          </Form.Group>
          <button type="submit" className="admin-button-editar mt-3">
            Editar{" "}
            <FontAwesomeIcon icon={faPenToSquare} className="icon-admin" />
          </button>
        </Form>
      )}
    </div>
  );
};

export default HorariosEditar;
