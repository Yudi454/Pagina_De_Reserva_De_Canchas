import { Button, Form } from "react-bootstrap";

const ProductosEditar = ({
  producto,
  setProducto,
  setMostrarEditar,
  handleEditarProducto,
  handleSubmit,
  register,
  errors,
}) => {
  return (
    <>
      <Button onClick={() => setMostrarEditar(false)}>X</Button>
      <h3>Editar</h3>
      {producto && (
        <Form onSubmit={handleSubmit(handleEditarProducto)}>
          <Form.Group>
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              name="nombre_producto"
              value={producto.nombre_producto}
              {...register("nombre_producto", {
                required: "El nombre es obligatorio",
              })}
              onChange={(e) =>
                setProducto({ ...producto, [e.target.name]: e.target.value })
              }
            />
            {errors.nombre_producto}
          </Form.Group>
          <Form.Group>
            <Form.Label>Precio</Form.Label>
            <Form.Control
              name="precio_producto"
              value={producto.precio_producto}
              {...register("precio_producto", {
                required: "El precio es obligatorio",
              })}
              onChange={(e) =>
                setProducto({ ...producto, [e.target.name]: e.target.value })
              }
            />
            {errors.precio_producto && <p>{errors.precio_producto.message}</p>}
          </Form.Group>
          <Form.Group>
            <Form.Label>Stock</Form.Label>
            <Form.Control
              name="stock"
              value={producto.stock}
              {...register("stock", {
                required: "El stock es obligatorio",
              })}
              onChange={(e) =>
                setProducto({ ...producto, [e.target.name]: e.target.value })
              }
            />
            {errors.stock && <p>{errors.stock.message}</p>}
          </Form.Group>
          <Form.Group>
            <Form.Label>Distribuidor</Form.Label>
            <Form.Control
              name="nombre_proveedor"
              value={producto.nombre_proveedor}
              {...register("nombre_proveedor", {
                required: "El proveedor es obligatorio",
              })}
              onChange={(e) =>
                setProducto({ ...producto, [e.target.name]: e.target.value })
              }
            />
            {errors.nombre_proveedor && (
              <p>{errors.nombre_proveedor.message}</p>
            )}
          </Form.Group>
          <Button type="submit">Editar</Button>
        </Form>
      )}
    </>
  );
};

export default ProductosEditar;
