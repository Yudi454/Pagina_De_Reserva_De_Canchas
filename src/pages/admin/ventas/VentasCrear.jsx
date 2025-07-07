import {
  faCartPlus,
  faFileSignature,
  faMagnifyingGlass,
  faShoppingCart,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const VentasCrear = ({
  venta,
  setVenta,
  producto,
  productos,
  setProductos,
  setProducto,
  setMostrarCrear,
  handleCrearVenta,
  añadirProducto,
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
      <button className="admin-button" onClick={() => setMostrarCrear(false)}>
        <FontAwesomeIcon icon={faTimes} size="lg" />
      </button>
      <Row className="gx-0">
        <Col md={6}>
          <h3>Crear venta</h3>
          <Form
            onSubmit={handleSubmitVenta(handleCrearVenta)}
            className="d-flex flex-column align-items-center"
          >
            <Form.Group>
              <Form.Label>Fecha:</Form.Label>
              <Form.Control
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
                name="hora_venta"
                {...registerVenta("hora_venta", {
                  required: "La hora es obligatoria",
                })}
                onChange={(e) =>
                  setVenta({ ...venta, [e.target.name]: e.target.value })
                }
              />
              {errorsVenta.hora_venta && (
                <p>{errorsVenta.hora_venta.message}</p>
              )}
              <small className="form-text text-center">
                Ingrese un horario en formato horas:minutos
              </small>
            </Form.Group>
            <Form.Group>
              <Form.Label>Email-Usuario:</Form.Label>
              <Form.Control
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

            <button type="submit" className="admin-button mt-3 mb-3">
              Crear venta{" "}
              <FontAwesomeIcon className="icon-admin" icon={faFileSignature} />
            </button>
          </Form>
          {venta && (
            <Form
              onSubmit={handleSubmitProducto(añadirProducto)}
              className="d-flex flex-column align-items-center"
            >
              <p>Producto</p>
              <Form.Group>
                <Form.Label>Nombre:</Form.Label>
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
                      console.log(productoSeleccionado);
                      
                      setProducto({
                        ...producto,
                        nombre_producto: productoSeleccionado.nombre_producto,
                        id_producto: productoSeleccionado.id_producto,
                        precio_producto: productoSeleccionado.precio_producto,
                        imagen_producto: productoSeleccionado.imagen_producto
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
                    setProducto({
                      ...producto,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
                {errorsProducto.cantidad && (
                  <p>{errorsProducto.cantidad.message}</p>
                )}
              </Form.Group>
              <small className="form-text text-center">
                Escribe el nombre del Producto y luego clickea en "Buscar
                Producto".
                <br />
                Selecciona producto, carga cantdad y clickea "Añadir Producto"
              </small>
              <div className="mt-3 mb-3">
                <button className="admin-button me-4" type="button" onClick={handleBuscar}>
                  Buscar producto
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="icon-admin"
                  />
                </button>
                <button className="admin-button" type="submit">
                  Añadir Producto
                  <FontAwesomeIcon icon={faCartPlus} className="icon-admin" />
                </button>
              </div>
            </Form>
          )}
        </Col>
        <Col md={6}>
          <div className="text-center">
            <h2>
              Carrito{" "}
              <FontAwesomeIcon icon={faShoppingCart} className="icon-admin" />{" "}
            </h2>
            <>
              {venta &&
                venta.productos &&
                venta.productos.map((p) => (
                  <ul
                    className="ul-admin text-start d-flex align-items-center flex-column d-sm-flex align-items-sm-center flex-sm-column"
                    key={p.id_producto}
                  >
                    <li className="text-center">
                      <img
                        src={p.imagen_producto}
                        className="img-fluid w-50"
                      ></img>
                    </li>
                    <li>Nombre: {p.nombre_producto}</li>
                    <li>Cantidad: {p.cantidad}</li>
                    <li>SubTotal: {p.precio_producto * p.cantidad}</li>
                  </ul>
                ))}
            </>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default VentasCrear;
