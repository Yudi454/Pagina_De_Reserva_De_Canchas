import {
  faCartPlus,
  faMagnifyingGlass,
  faPenToSquare,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Form } from "react-bootstrap";

const VentasEditar = ({
  venta,
  producto,
  productos,
  setVenta,
  setProducto,
  setProductos,
  setMostrarEditar,
  añadirProducto,
  handleEditarVenta,
  handleBuscar,
  handleSubmitVenta,
  handleSubmitProducto,
  registerVenta,
  registerProducto,
  errorsVenta,
  errorsProducto,
}) => {
  return (
    <div className="d-flex flex-column align-items-center text-center">
      <button
        className="admin-button-editar"
        onClick={() => setMostrarEditar(false)}
      >
        <FontAwesomeIcon icon={faTimes} size="lg" />
      </button>
      <h3>Editar venta</h3>
      {venta && (
        <Form
          onSubmit={handleSubmitVenta(handleEditarVenta)}
          className="d-flex flex-column align-items-center"
        >
          <Form.Group>
            <Form.Label>Fecha:</Form.Label>
            <Form.Control
              value={venta.fecha_venta}
              name="fecha_venta"
              {...registerVenta("fecha_venta", {
                required: "La fecha es obligatoria",
              })}
              onChange={(e) =>
                setVenta({ ...venta, [e.target.name]: e.target.value })
              }
            />
            {errorsVenta.fecha_venta && (
              <p>{errorsVenta.fecha_venta.message}</p>
            )}
            <small className="form-text text-center">
              Ingrese una fecha en formato dia-mes-año
            </small>
          </Form.Group>
          <Form.Group>
            <Form.Label>Hora:</Form.Label>
            <Form.Control
              value={venta.hora_venta}
              name="hora_venta"
              {...registerVenta("hora_venta", {
                required: "La hora es obligatoria",
              })}
              onChange={(e) =>
                setVenta({ ...venta, [e.target.name]: e.target.value })
              }
            />
            {errorsVenta.hora_venta && <p>{errorsVenta.hora_venta.message}</p>}
            <small className="form-text text-center">
              Ingrese un horario en formato horas:minutos
            </small>
          </Form.Group>
          <Form.Group>
            <Form.Label>Email-Usuario:</Form.Label>
            <Form.Control
              value={venta.email_usuario}
              name="email_usuario"
              {...registerVenta("email_usuario", {
                required: "El email es obligatorio",
              })}
              onChange={(e) =>
                setVenta({ ...venta, [e.target.name]: e.target.value })
              }
            />
            {errorsVenta.email_usuario && (
              <p>{errorsVenta.email_usuario.message}</p>
            )}
          </Form.Group>
          <p className="mt-4">Productos:</p>
          <Form.Group className="d-flex flex-column align-items-center justify-content-center">
            {venta.productos &&
              venta.productos.map((p, index) => (
                <>
                  <img src={p.imagen_producto} className="img-fluid w-25" />
                  <div key={p.id_producto}>
                    <Form.Label>
                      {p.nombre_producto}-precio: {p.precio_producto}<br/>Cantidad:
                    </Form.Label>
                    <Form.Control
                      value={p.cantidad}
                      name={`cantidad-${index}`}
                      {...registerVenta(`cantidad-${index}`, {
                        required: "La cantidad es obligatoria",
                      })}
                      onChange={(e) => {
                        const nuevosProductos = [...venta.productos];
                        nuevosProductos[index].cantidad = e.target.value;
                        setVenta({ ...venta, productos: nuevosProductos });
                      }}
                    />
                  </div>
                </>
              ))}
          </Form.Group>

          <button className="admin-button-editar mt-3 mb-4" type="submit">
            Editar venta
            <FontAwesomeIcon icon={faPenToSquare} className="icon-admin" />
          </button>
        </Form>
      )}
      {venta && (
        <Form
          onSubmit={handleSubmitProducto(añadirProducto)}
          className="d-flex flex-column align-items-center"
        >
          <p>Producto</p>
          <Form.Group>
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              list="productosSimilares"
              name="nombre_producto"
              {...registerProducto("nombre_producto", {
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
            {errorsProducto.nombre_producto && (
              <p>{errorsProducto.nombre_producto.message}</p>
            )}
          </Form.Group>
          <Form.Group>
            <Form.Label>Cantidad</Form.Label>
            <Form.Control
              name="cantidad"
              {...registerProducto("cantidad", {
                required: "La cantidad es obligatoria",
              })}
              onChange={(e) =>
                setProducto({ ...producto, [e.target.name]: e.target.value })
              }
            />
            {errorsProducto.cantidad && (
              <p>{errorsProducto.cantidad.message}</p>
            )}
          </Form.Group>
          <small className="form-text text-center">
            Escribe el nombre del Producto y luego clickea en "Buscar Producto".
            <br />
            Selecciona producto, carga cantdad y clickea "Añadir Producto"
          </small>
          <div className="mt-3 mb-2">
            <button className="admin-button-editar me-4" onClick={handleBuscar}>
              Buscar producto
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="icon-admin"
              />
            </button>
            <button className="admin-button-editar" type="submit">
              Añadir Producto
              <FontAwesomeIcon icon={faCartPlus} className="icon-admin" />
            </button>
          </div>
        </Form>
      )}
    </div>
  );
};

export default VentasEditar;
