import { Button, Form } from "react-bootstrap";

const CanchasEditar = ({
  setMostrarEditar,
  cancha,
  setCancha,
  handleSubmit,
}) => {
  return (
    <>
      <Button onClick={() => setMostrarEditar(false)}>X</Button>
      <h3>Editar</h3>
      {cancha && (
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Form.Group>
            <Form.Label>Imagen</Form.Label>
            <Form.Control
              value={cancha.imagen}
              onChange={(e) =>
                setCancha({ ...cancha, imagen: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Tipo</Form.Label>
            <Form.Control
              value={cancha.tipo}
              onChange={(e) =>
                setCancha({ ...cancha, tipo: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Precio</Form.Label>
            <Form.Control
              value={cancha.precio}
              onChange={(e) =>
                setCancha({ ...cancha, precio: e.target.value })
              }
            />
          </Form.Group>
          <Button type="submit">Editar</Button>
        </Form>
      )}
    </>
  );
};

export default CanchasEditar;
