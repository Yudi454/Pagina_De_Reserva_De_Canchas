import React from "react";
import { Button, Form } from "react-bootstrap";

const HorariosEditar = ({
  horario,
  setHorario,
  handleSubmit,
  setMostrarEditar,
}) => {
  return (
    <>
      <Button onClick={() => setMostrarEditar(false)}>X</Button>
      <h3>Editar</h3>
      {horario && (
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Form.Group>
            <Form.Label>Hora de inicio</Form.Label>
            <Form.Control
              value={horario.hora_inicio}
              onChange={(e) =>
                setHorario({ ...horario, hora_inicio: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Hora de fin</Form.Label>
            <Form.Control
              value={horario.hora_fin}
              onChange={(e) =>
                setHorario({ ...horario, hora_fin: e.target.value })
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
