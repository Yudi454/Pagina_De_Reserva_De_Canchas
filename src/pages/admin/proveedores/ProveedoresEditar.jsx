import { Button, Form } from "react-bootstrap";

const ProveedoresEditar = ({setMostrarEditar,proveedor,setProveedor,handleSubmit}) => {
  return (
    <>
      <Button onClick={() => setMostrarEditar(false)}>X</Button>
      <h3>Editar</h3>
      {proveedor && (
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Form.Group>
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              value={proveedor.nombre}
              onChange={(e) =>
                setProveedor({ ...proveedor, nombre: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              value={proveedor.email}
              onChange={(e) =>
                setProveedor({ ...proveedor, email: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Telefono</Form.Label>
            <Form.Control
              value={proveedor.telefono}
              onChange={(e) =>
                setProveedor({ ...proveedor, telefono: e.target.value })
              }
            />
          </Form.Group>
          <Button type="submit">Editar</Button>
        </Form>
      )}
    </>
  );
};

export default ProveedoresEditar;
