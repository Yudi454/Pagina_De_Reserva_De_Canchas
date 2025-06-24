import { Button, Form } from "react-bootstrap";

const ProductosEditar = ({producto,handleSubmit,setProducto,setMostrarEditar}) => {
  return (
    <>
      <Button onClick={() => setMostrarEditar(false)}>X</Button>
      <h3>Editar</h3>
      {producto && (
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Form.Group>
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              value={producto.nombre}
              onChange={(e) =>
                setProducto({ ...producto, nombre: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Precio</Form.Label>
            <Form.Control
              value={producto.precio}
              onChange={(e) =>
                setProducto({ ...producto, precio: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Stock</Form.Label>
            <Form.Control
              value={producto.stock}
              onChange={(e) =>
                setProducto({ ...producto, stock: e.target.value })
              }
            />
          </Form.Group>
          <Button type="submit">Editar</Button>
        </Form>
      )}
    </>
  );
};

export default ProductosEditar;
