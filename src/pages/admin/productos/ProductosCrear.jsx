import {
  faFileSignature,
  faMagnifyingGlass,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Col, Form } from "react-bootstrap";

const ProductosCrear = ({
  setMostrarCrear,
  producto,
  proveedor,
  proveedores,
  setProducto,
  setProveedor,
  setProveedores,
  handleBuscarProveedor,
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
      {producto && producto.imagen_producto && (
        <img src={producto.imagen_producto} className="img-fluid w-25 mt-3 mb-3" />
      )}
      <Form
        onSubmit={handleSubmit(handleCrearProducto)}
        className="d-flex flex-column align-items-center"
      >
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
          {errors.nombre_producto && <p>{errors.nombre_producto.message}</p>}
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
          {errors.imagen_producto && <p>{errors.imagen_producto.message}</p>}
          <small className="form-text text-center">
            Ingrese un link de una imagen
          </small>
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
          <Form.Label>Proveedor:</Form.Label>
          <Form.Control
            list="proveedoresSimilares"
            name="nombre_proveedor"
            {...register("nombre_proveedor", {
              required: "El proveedor es obligatorio",
            })}
            onChange={(e) => {
              if (proveedores) {
                console.log("entro");
                const proveedorSeleccionado = proveedores.find(
                  (p) => p.nombre_proveedor === e.target.value
                );

                if (proveedorSeleccionado) {
                  setProveedor({
                    ...proveedor,
                    nombre_proveedor: proveedorSeleccionado.nombre_proveedor,
                  });
                }
              } else {
                setProveedor({
                  ...proveedor,
                  [e.target.name]: e.target.value,
                });
              }
            }}
          />
          <datalist id="proveedoresSimilares">
            {proveedores &&
              proveedores.map((p) => (
                <option key={p.id_proveedor} value={p.nombre_proveedor} />
              ))}
          </datalist>
          {errors.nombre_proveedor && (
            <p className="text-danger">{errors.nombre_proveedor.message}</p>
          )}
        </Form.Group>
        <Col>
          <small className="form-text text-center">
            Escribe el nombre del Proveedor y luego clickea en "Buscar
            Proveedor".
          </small>
        </Col>
        <div>
          <button
            className="admin-button me-4"
            type="button"
            onClick={handleBuscarProveedor}
          >
            Buscar Proveedor
            <FontAwesomeIcon icon={faMagnifyingGlass} className="icon-admin" />
          </button>
          <button className="admin-button mt-3" type="submit">
            Crear producto{" "}
            <FontAwesomeIcon className="icon-admin" icon={faFileSignature} />
          </button>
        </div>
      </Form>
    </div>
  );
};

export default ProductosCrear;
