import { Button, Form } from "react-bootstrap";

const VentasEditar = ({
  venta,
  setVenta,
  handleSubmit,
  setMostrarEditar,
  deleteProducto,
  buscarProducto,
  productoEncontrado,
  productosFiltrados,
  productos,
  setProductoEncontrado,
  mostrarProductos,
  setMostrarProductos,
  añadirProducto
}) => {
  return (
    <>
      <Button onClick={() => setMostrarEditar(false)}>X</Button>
      <h3>Editar</h3>
      {venta && (
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Form.Group>
            <Form.Label>Fecha</Form.Label>
            <Form.Control
              value={venta.fecha_venta}
              onChange={(e) =>
                setVenta({ ...venta, fecha_venta: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Hora</Form.Label>
            <Form.Control
              value={venta.hora_venta}
              onChange={(e) =>
                setVenta({ ...venta, hora_venta: e.target.value })
              }
            />
          </Form.Group>
          <Button onClick={() => añadirProducto()}>Añadir Producto</Button>
          <Form.Group>
            <Form.Label>Nombre:</Form.Label>
            <div className="position-relative">
              <input
                className="form-control"
                placeholder="Buscar producto"
                value={productoEncontrado && productoEncontrado.nombre}
                onChange={(e) => {
                  buscarProducto(e.target.value);
                  if (e.target.value.length >= 3) {
                    setMostrarProductos(true);
                    setProductoEncontrado(undefined);
                  } else {
                    setMostrarProductos(false);
                  }
                }}
              />

              <ul className="list-group position-absolute w-100 z-3">
                {mostrarProductos &&
                  productoEncontrado === undefined &&
                  productosFiltrados.map((Producto) => (
                    <li
                      className="list-group-item"
                      key={Producto.id}
                      onClick={() => {setProductoEncontrado({id: Producto.id, nombre:Producto.nombre, precio: Producto.precio}); 
                      }}
                    >
                      {Producto.nombre}
                    </li>
                  ))}
              </ul>
            </div>

            <Form.Label >Cantidad:</Form.Label>
            <Form.Control onChange={(e) => setProductoEncontrado({...productoEncontrado,cantidad: e.target.value})}/>
          </Form.Group>
          {Object(venta.productos).map((producto) => (
            <Form.Group key={producto.id}>
              <Form.Label>
                {producto.nombre}-Cantidad -{" "}
                <Button onClick={() => deleteProducto(producto.id)}>
                  Eliminar
                </Button>
              </Form.Label>
              <Form.Control
                value={producto.cantidad}
                onChange={(e) =>
                  setVenta({ ...producto, cantidad: e.target.value })
                }
              />
            </Form.Group>
          ))}
          <Button type="submit">Editar</Button>
        </Form>
      )}
    </>
  );
};

export default VentasEditar;
