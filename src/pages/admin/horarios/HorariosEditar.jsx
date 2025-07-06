import { faPenToSquare, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Form } from "react-bootstrap";

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
      <Button onClick={() => setMostrarEditar(false)}><FontAwesomeIcon icon={faTimes} size="lg" /></Button>
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
          </Form.Group>
          <Button type="submit" className="mt-3">Editar <FontAwesomeIcon icon={faPenToSquare} className="icon-admin" /></Button>
        </Form>
      )}
    </div>
  );
};

export default HorariosEditar;
