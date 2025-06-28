import { Button, Form } from "react-bootstrap";

const UsuariosEditar = ({
  usuario,
  setUsuario,
  handleSubmit,
  setMostrarEditar,
}) => {
  return (
    <>
      <Button onClick={() => setMostrarEditar(false)}>X</Button>
      <h3>Editar</h3>
      {usuario && (
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Form.Group>
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              value={usuario.nombre_usuario}
              onChange={(e) =>
                setUsuario({ ...usuario, nombre_usuario: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              value={usuario.apellido_usuario}
              onChange={(e) =>
                setUsuario({ ...usuario, apellido_usuario: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>DNI</Form.Label>
            <Form.Control
              value={usuario.dni}
              onChange={(e) =>
                setUsuario({ ...usuario, dni: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              value={usuario.email_usuario}
              onChange={(e) =>
                setUsuario({ ...usuario, email_usuario: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Telefono</Form.Label>
            <Form.Control
              value={usuario.telefono_usuario}
              onChange={(e) =>
                setUsuario({ ...usuario, telefono_usuario: e.target.value })
              }
            />
          </Form.Group>
          <Button type="submit">Editar</Button>
        </Form>
      )}
    </>
  );
};

export default UsuariosEditar;
