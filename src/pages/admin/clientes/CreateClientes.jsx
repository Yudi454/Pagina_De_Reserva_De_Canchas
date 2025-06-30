import React from "react";
import { Button, Form } from "react-bootstrap";

const CreateClientes = ({
  setMostrarCreate,
  cliente,
  setCliente,
  handleCreateCliente,
}) => {
  return (
    <>
      <Button onClick={() => setMostrarCreate(false)}>X</Button>
      <h3>Crear</h3>
      <Form onSubmit={(e) => handleCreateCliente(e)}>
        <Form.Group>
          <Form.Label>Usuario</Form.Label>
          <Form.Control
            onChange={(e) =>
              setCliente({ ...cliente, usuario: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            onChange={(e) =>
              setCliente({ ...cliente, email_cliente: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Telefono</Form.Label>
          <Form.Control
            onChange={(e) =>
              setCliente({ ...cliente, telefono_cliente: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            onChange={(e) =>
              setCliente({ ...cliente, contraseña_cliente: e.target.value })
            }
          />
        </Form.Group>
        <Button type="submit">Crear</Button>
      </Form>
    </>
  );
};

export default CreateClientes;
