import { faPenToSquare, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  console.log(producto);

  return (
    <div className="d-flex flex-column align-items-center text-center">
      <Button onClick={() => setMostrarEditar(false)}>
        <FontAwesomeIcon icon={faTimes} size="lg" />
      </Button>
      <h3>Editar</h3>
      {producto && (
        <>
          <img src={producto.imagen} className="img-fluid w-25 mt-3 mb-3" />
          <Form onSubmit={handleSubmit(handleEditarProducto)}>
            <Form.Group>
              <Form.Label>Nombre:</Form.Label>
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
              <Form.Label>Imagen:</Form.Label>
              <Form.Control
                name="imagen"
                value={producto.imagen}
                {...register("imagen", {
                  required: "El nombre es obligatorio",
                })}
                onChange={(e) =>
                  setProducto({ ...producto, [e.target.name]: e.target.value })
                }
              />
              {errors.nombre_producto}
            </Form.Group>
            <Form.Group>
              <Form.Label>Precio:</Form.Label>
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
              {errors.precio_producto && (
                <p>{errors.precio_producto.message}</p>
              )}
            </Form.Group>
            <Form.Group>
              <Form.Label>Stock:</Form.Label>
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
              <Form.Label>Proveedor:</Form.Label>
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
            <Button type="submit" className="mt-3">
              Editar{" "}
              <FontAwesomeIcon icon={faPenToSquare} className="icon-admin" />
            </Button>
          </Form>
        </>
      )}
    </div>
  );
};

export default ProductosEditar;
