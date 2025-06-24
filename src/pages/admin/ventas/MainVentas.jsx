import { Button, Table } from "react-bootstrap";

const MainVentas = ({ventas,handleVer,handleEditar,handleDelete}) => {
  return (
    <>
      <h3>Ventas</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Usuario</th>
            <th>Fecha</th>
            <th>Hora</th>
            <th>Total</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {ventas != undefined &&
            ventas.map((venta) => (
              <tr key={venta.id}>
                <td>{venta.id}</td>
                <td>{venta.nombre_vendedor}-{venta.apellido_vendedor}</td>
                <td>{venta.fecha_venta}</td>
                <td>{venta.hora_venta}</td>
                <td>${venta.total}</td>
                <td>
                  <Button onClick={() => handleVer(venta.id)}>Ver</Button>
                  <Button onClick={() => handleEditar(venta.id)}>
                    Editar
                  </Button>
                  <Button onClick={() => handleDelete(venta.id)}>
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
};

export default MainVentas;
