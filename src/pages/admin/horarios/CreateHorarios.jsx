import React from "react";
import { Button, Form } from "react-bootstrap";

const CreateHorarios = ({
  setMostrarCrear,
  horario,
  setHorario,
  handleCrearHorario,
  handleSubmit,
  register,
  errors,
}) => {
  return (
    <>
      <Button onClick={() => setMostrarCrear(false)}>X</Button>
      <h3>Crear</h3>

      <Form onSubmit={handleSubmit(handleCrearHorario)}>
        <Form.Group>
          <Form.Label>Hora de inicio</Form.Label>
          <Form.Control
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
    </>
  );
};

export default CreateHorarios;
