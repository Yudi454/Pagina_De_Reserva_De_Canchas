import React from "react";
import { Button, Form } from "react-bootstrap";

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
  errorsProducto
}) => {
  return (
    <>
      <Button onClick={() => setMostrarCrear(false)}>X</Button>
      <h3>Crear</h3>
      <Form onSubmit={handleSubmitVenta(handleCrearVenta)}>
        <Form.Group>
          <Form.Label>Fecha</Form.Label>
          <Form.Control
          name="fecha_venta"
          {...registerVenta("fecha_venta",{
            required: "La fecha es obligatoria"
          })}
            onChange={(e) =>
              setVenta({ ...venta, [e.target.name]: e.target.value })
            }
          />
          {errorsVenta.fecha_venta && <p>{errorsVenta.fecha_venta.message}</p>}
        </Form.Group>
        <Form.Group>
          <Form.Label>Hora</Form.Label>
          <Form.Control
          name="hora_venta"
          {...registerVenta("hora_venta",{
            required: "La hora es obligatoria"
          })}
            onChange={(e) =>
              setVenta({ ...venta, [e.target.name]: e.target.value })
            }
          />
          {errorsVenta.hora_venta && <p>{errorsVenta.hora_venta.message}</p>}
        </Form.Group>
        <Form.Group>
          <Form.Label>Email-Usuario</Form.Label>
          <Form.Control
          name="email_usuario"
          {...registerVenta("email_usuario",{
            required: "El email es obligatorio"
          })}
            onChange={(e) =>
              setVenta({ ...venta, [e.target.name]: e.target.value })
            }
          />
          {errorsVenta.email_usuario && <p>{errorsVenta.email_usuario.message }</p>}
        </Form.Group>

        <Button type="submit">Editar</Button>
      </Form>
      {venta && (
        <Form onSubmit={handleSubmitProducto(añadirProducto)}>
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
                    id_producto: productoSeleccionado.id_producto,
                    precio_producto: productoSeleccionado.precio_producto,
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
            {errorsProducto.nombre_producto && <p>{errorsProducto.nombre_producto.message}</p>}
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
            {errorsProducto.cantidad && <p>{errorsProducto.cantidad.message}</p>}
            <Button onClick={handleBuscar}>Buscar producto</Button>
            <Button type="submit">Añadir Producto</Button>
          </Form.Group>
        </Form>
      )}
    </>
  );
};

export default VentasCrear;
