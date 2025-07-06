import { faEye, faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Table } from "react-bootstrap";

const MainVentas = ({ ventas, handleVer, handleEditar, handleDelete }) => {
  return (
    <>
      <h3>Ventas</h3>
      <div className="container-table">
        <Table striped bordered hover className="table-admin">
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
                <tr key={venta.id_venta} className="tr-admin">
                  <td>{venta.id_venta}</td>
                  <td>
                    {venta.nombre_usuario}-{venta.apellido_usuario}
                  </td>
                  <td>{venta.fecha_venta}</td>
                  <td>{venta.hora_venta}</td>
                  <td>${venta.total_venta}</td>
                  <td>
                    <Button onClick={() => handleVer(venta.id_venta)}>
                      Ver
                      <FontAwesomeIcon icon={faEye} className="icon-admin" />
                    </Button>
                    <Button onClick={() => handleEditar(venta.id_venta)}>
                      Editar
                      <FontAwesomeIcon
                        icon={faPenToSquare}
                        className="icon-admin"
                      />
                    </Button>
                    <Button onClick={() => handleDelete(venta.id_venta)}>
                      Eliminar
                      <FontAwesomeIcon icon={faTrash} className="icon-admin" />
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default MainVentas;
