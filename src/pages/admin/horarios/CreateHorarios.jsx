import { faFileSignature, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Form } from "react-bootstrap";

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
      <button className="admin-button" onClick={() => setMostrarCrear(false)}><FontAwesomeIcon icon={faTimes} size="lg"/></button>
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
        <button type="submit" className="admin-button-editar mt-3">Editar horario<FontAwesomeIcon className="icon-admin" icon={faFileSignature}/></button>
      </Form>
    </div>
  );
};

export default CreateHorarios;
