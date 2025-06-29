import React from "react";
import { Button, Form } from "react-bootstrap";

const ReservasEditar = ({
  setMostrarEditar,
  reserva,
  setReserva,
  hanldeSubmit,
}) => {
  return (
    <>
      <Button onClick={() => setMostrarEditar(false)}>X</Button>
      <h3>Editar</h3>
      {reserva && (
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Form.Group>
            <Form.Label>Email-Usuario</Form.Label>
            <Form.Control
              value={reserva.nombre}
              onChange={(e) =>
                setReserva({ ...reserva, nombre: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Total</Form.Label>
            <Form.Control
              value={reserva.total}
              onChange={(e) =>
                setReserva({ ...reserva, total: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Dia</Form.Label>
            <Form.Control
              value={reserva.dia}
              onChange={(e) =>
                setReserva({ ...reserva, dia: e.target.value })
              }
            />
          </Form.Group>       
             <Form.Group>
            <Form.Label>Horario</Form.Label>
            <Form.Control
              value={reserva.dia}
              onChange={(e) =>
                setReserva({ ...reserva, dia: e.target.value })
              }
            />
          </Form.Group>
          <Button type="submit">Editar</Button>
        </Form>
      )}
    </>
  );
};

export default ReservasEditar;
