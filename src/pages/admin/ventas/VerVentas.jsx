import { Button, Form } from "react-bootstrap";

const VerVentas = ({ venta, setMostrarVer }) => {
  return (
    <>
      <Button onClick={() => setMostrarVer(false)}>X</Button>
      {venta && (
        <Form className="d-flex flex-column align-items-center">
          <Form.Group className="mb-3">
            <Form.Label>Id</Form.Label>
            <Form.Control value={venta.id_venta} disabled />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Vendedor</Form.Label>
            <Form.Control value={venta.nombre_usuario} disabled />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Telefono-Vendedor</Form.Label>
            <Form.Control value={venta.telefono_usuario} disabled />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Fecha y Hora</Form.Label>
            <Form.Control
              value={`${venta.fecha_venta}-${venta.hora_venta}`}
              disabled
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Total</Form.Label>
            <Form.Control value={venta.total_venta} disabled />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Productos</Form.Label>
            {Object(venta.productos).map((producto) => (
              <ul key={producto.id_venta} className="ul-admin">
                <img src={producto.imagen} className="img-fluid w-25" />
                <li>Nobre: {producto.nombre_producto}</li>
                <li>Subtotal: ${producto.subtotal_detalle_venta}</li>
                <li>Cantidad: {producto.cantidad}</li>
              </ul>
            ))}
          </Form.Group>
        </Form>
      )}
    </>
  );
};

export default VerVentas;
