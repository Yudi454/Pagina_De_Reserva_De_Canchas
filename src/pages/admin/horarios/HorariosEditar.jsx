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
    <>
      <Button onClick={() => setMostrarEditar(false)}>X</Button>
      <h3>Editar</h3>
      {horario && (
        <Form onSubmit={handleSubmit(handleEditarHorario)}>
          <Form.Group>
            <Form.Label>Hora de inicio</Form.Label>
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
            <Form.Label>Hora de fin</Form.Label>
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
          <Button type="submit">Editar</Button>
        </Form>
      )}
    </>
  );
};

export default HorariosEditar;
