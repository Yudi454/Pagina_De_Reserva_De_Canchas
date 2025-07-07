import {
  faEye,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Col, Row, Table } from "react-bootstrap";

const MainVentas = ({ ventas, handleVer, handleEditar, handleDelete }) => {
  return (
    <>
      <h3>Ventas</h3>
      <div className="table-responsive-sm">
        <Table striped bordered hover className="table-admin">
          <thead>
            <tr className="th-admin">
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
                    <Row>
                      <Col
                        md={4}
                        sm={12}
                        className="d-flex justify-content-center"
                      >
                        <button
                          className="admin-button d-flex align-items-center justify-content-center"
                          onClick={() => handleVer(venta.id_venta)}
                        >
                          Ver
                          <FontAwesomeIcon
                            icon={faEye}
                            className="icon-admin"
                          />
                        </button>
                      </Col>
                      <Col
                        md={4}
                        className="d-flex justify-content-center mt-2 mt-sm-2 mt-md-0"
                      >
                        <button
                          className="admin-button-editar d-flex align-items-center justify-content-center"
                          onClick={() => handleEditar(venta.id_venta)}
                        >
                          Editar
                          <FontAwesomeIcon
                            icon={faPenToSquare}
                            className="icon-admin"
                          />
                        </button>
                      </Col>
                      <Col
                        md={4}
                        className="d-flex justify-content-center mt-2 mt-sm-2 mt-md-0"
                      >
                        <button
                          className="admin-button-delete d-flex align-items-center justify-content-center w-25 ms-md-2"
                          onClick={() => handleDelete(venta.id_venta)}
                        >
                          Eliminar
                          <FontAwesomeIcon
                            icon={faTrash}
                            className="icon-admin"
                          />
                        </button>
                      </Col>
                    </Row>
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
