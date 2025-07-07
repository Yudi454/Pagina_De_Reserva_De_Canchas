import { faFileSignature, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  Form } from "react-bootstrap";

const ProductosCrear = ({
  setMostrarCrear,
  producto,
  setProducto,
  handleCrearProducto,
  handleSubmit,
  register,
  errors,
}) => {
  return (
    <div className="d-flex flex-column align-items-center text-center mb-5">
      <button className="admin-button" onClick={() => setMostrarCrear(false)}>
        <FontAwesomeIcon icon={faTimes} size="lg" />
      </button>
      <h3>Crear</h3>
      <Form onSubmit={handleSubmit(handleCrearProducto)}>
        <Form.Group>
          <Form.Label>Nombre:</Form.Label>
          <Form.Control
            name="nombre_producto"
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
            name="imagen_producto"
            {...register("imagen_producto", {
              required: "La imagen es obligatoria",
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
          <Form.Label>Stock:</Form.Label>
          <Form.Control
            name="stock"
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
          <Form.Label>Distribuidor:</Form.Label>
          <Form.Control
            name="nombre_proveedor"
            {...register("nombre_proveedor", {
              required: "El proveedor es obligatorio",
            })}
            onChange={(e) =>
              setProducto({ ...producto, [e.target.name]: e.target.value })
            }
          />
          {errors.nombre_proveedor && <p>{errors.nombre_proveedor.message}</p>}
        </Form.Group>
        <button className="admin-button mt-3" type="submit" >
          Crear producto{" "}
          <FontAwesomeIcon className="icon-admin" icon={faFileSignature} />
        </button>
      </Form>
    </div>
  );
};

export default ProductosCrear;
