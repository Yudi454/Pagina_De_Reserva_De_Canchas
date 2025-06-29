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
              value={producto.nombre_producto}
              onChange={(e) =>
                setProducto({ ...producto, nombre_producto: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Precio</Form.Label>
            <Form.Control
              value={producto.precio_producto}
              onChange={(e) =>
                setProducto({ ...producto, precio_producto: e.target.value })
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
