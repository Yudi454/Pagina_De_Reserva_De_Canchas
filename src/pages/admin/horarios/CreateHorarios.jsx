import { faFileSignature, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
    <div className="d-flex flex-column align-items-center text-center">
      <Button onClick={() => setMostrarCrear(false)}><FontAwesomeIcon icon={faTimes} size="lg"/></Button>
      <h3>Crear horario</h3>
      <Form onSubmit={handleSubmit(handleCrearHorario)}>
        <Form.Group>
          <Form.Label>Hora de inicio:</Form.Label>
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
          <Form.Label>Hora de fin:</Form.Label>
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
        <Button type="submit" className="mt-3">Editar horario<FontAwesomeIcon className="icon-admin" icon={faFileSignature}/></Button>
      </Form>
    </div>
  );
};

export default CreateHorarios;
