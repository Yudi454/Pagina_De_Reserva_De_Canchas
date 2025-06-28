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
              value={proveedor.nombre_proveedor}
              onChange={(e) =>
                setProveedor({ ...proveedor, nombre_proveedor: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              value={proveedor.email_proveedor}
              onChange={(e) =>
                setProveedor({ ...proveedor, email_proveedor: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Telefono</Form.Label>
            <Form.Control
              value={proveedor.telefono_proveedor}
              onChange={(e) =>
                setProveedor({ ...proveedor, telefono_proveedor: e.target.value })
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
