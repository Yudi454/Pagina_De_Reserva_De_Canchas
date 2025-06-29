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
              <tr key={venta.id_venta}>
                <td>{venta.id_venta}</td>
                <td>{venta.nombre_usuario}-{venta.apellido_usuario}</td>
                <td>{venta.fecha_venta}</td>
                <td>{venta.hora_venta}</td>
                <td>${venta.total_venta}</td>
                <td>
                  <Button onClick={() => handleVer(venta.id_venta)}>Ver</Button>
                  <Button disabled onClick={() => handleEditar(venta.id_venta)}>
                    Editar
                  </Button>
                  <Button onClick={() => handleDelete(venta.id_venta)}>
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
