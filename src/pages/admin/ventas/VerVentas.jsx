import { Button, Form } from "react-bootstrap";

const VerVentas = ({ venta, setMostrarVer }) => {
  return (
    <>
      <Button onClick={() => setMostrarVer(false)}>X</Button>
      {venta && (
        <>
          <Form.Group className="mb-3">
            <Form.Label>Id</Form.Label>
            <Form.Control value={venta.id} disabled />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Vendedor</Form.Label>
            <Form.Control
              value={`${venta.nombre_vendedor}-${venta.apellido_vendedor}`}
              disabled
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Telefono-Vendedor</Form.Label>
            <Form.Control value={venta.telefono_vendedor} disabled />
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
            <Form.Control value={venta.total} disabled />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Productos</Form.Label>
            {Object(venta.productos).map((producto) => (
              <ul key={producto.id}>
                <li>Nobre: {producto.nombre}</li>
                <li>Precio-c/u: ${producto.precio}</li>
                <li>Cantidad: {producto.cantidad}</li>
              </ul>
            ))}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Fecha_Creacion</Form.Label>
            <Form.Control value={venta.fecha_creacion} disabled />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Estado</Form.Label>
            <Form.Control value={venta.estado} disabled />
          </Form.Group>
        </>
      )}
    </>
  );
};

export default VerVentas;
