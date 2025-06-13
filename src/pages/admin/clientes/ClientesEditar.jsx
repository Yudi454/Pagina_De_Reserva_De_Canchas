import { Form } from "react-bootstrap";

const ClientesEditar = ({ cliente, setCliente }) => {
  console.log(cliente);

  return (
    <>
      <h3>Editar</h3>
      {cliente && (
        <Form>
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
            <Form.Control />
          </Form.Group>
          <Form.Group>
            <Form.Label>Telefono</Form.Label>
            <Form.Control />
          </Form.Group>
        </Form>
      )}
    </>
  );
};

export default ClientesEditar;
