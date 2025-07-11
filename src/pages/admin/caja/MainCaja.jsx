import { faCartPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Form } from "react-bootstrap";
import { useStore } from "../../../store/AuthStore";



const MainCaja = ({
  producto,
  productos,
  register,
  errors,
  setProducto,
  handleBuscar,
  handleSubmit,
  handleCrear,
}) => {

  return (
    <div >
      <div className="main-caja w-100 w-md-25 d-flex justify-content-center align-items-center">
        <Form
          onSubmit={handleSubmit(handleCrear)}
          className=" flex-column align-items-center"
        >
          <Form.Group className="d-flex flex-column align-items-center">
            <Form.Label className="caja-nom">Nombre del producto</Form.Label>
            <small className="form-text text-center">
              Escribe el nombre del producto
              <br />y luego clickea en "Buscar producto".
            </small>
            <Form.Control
              className="mt-3 "
              list="productosSimilares"
              name="nombre_producto"
              {...register("nombre_producto", {
                required: "El nombre es obligatorio",
              })}
              onChange={(e) => {
                if (productos) {
                  const productoSeleccionado = productos.find(
                    (p) => p.nombre_producto === e.target.value
                  );
                  setProducto({
                    ...producto,
                    nombre_producto: productoSeleccionado.nombre_producto,
                    id_producto: productoSeleccionado.id_producto,
                    precio_producto: productoSeleccionado.precio_producto,
                    imagen_producto: productoSeleccionado.imagen_producto,
                  });
                } else {
                  setProducto({
                    ...producto,
                    [e.target.name]: e.target.value,
                  });
                }
              }}
            />
            <datalist id="productosSimilares">
              {productos &&
                productos.map((producto) => (
                  <option
                    key={producto.id_producto}
                    value={producto.nombre_producto}
                  />
                ))}
            </datalist>
            <button onClick={handleBuscar} className="admin-button mt-3 ">
              Buscar Producto{" "}
              <FontAwesomeIcon icon={faSearch} className="icon-admin" />
            </button>
          </Form.Group>
          <Form.Group className="text-center">
            <Form.Label className="mt-3">Ingresar cantidad</Form.Label>
            <Form.Control
              className="mt-1"
              name="cantidad"
              {...register("cantidad", {
                required: "La cantidad es obligatoria",
              })}
              onChange={(e) =>
                setProducto({ ...producto, [e.target.name]: e.target.value })
              }
            />
          </Form.Group>
          <button type="submit" className="admin-button mt-3">
            Agregar al carrito{" "}
            <FontAwesomeIcon icon={faCartPlus} className="icon-admin" />
          </button>
        </Form>
      </div>
    </div>
  );
};

export default MainCaja;
