import { Button, Form } from "react-bootstrap";

const ClientesEditar = ({ cliente, setCliente, handleSubmit }) => {
  return (
    <>
      <h3>Editar</h3>
      {cliente && (
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Form.Group>
            <Form.Label>Usuario</Form.Label>
            <Form.Control
              value={cliente.usuario}
              onChange={(e) =>
                setCliente({ ...cliente, usuario: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              value={cliente.email}
              onChange={(e) =>
                setCliente({ ...cliente, email: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Telefono</Form.Label>
            <Form.Control
              value={cliente.telefono}
              onChange={(e) =>
                setCliente({ ...cliente, telefono: e.target.value })
              }
            />
          </Form.Group>
          <Button type="submit">
            Editar
          </Button>
        </Form>
      )}
    </>
  );
};

export default ClientesEditar;
