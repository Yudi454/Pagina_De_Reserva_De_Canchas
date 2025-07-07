import {
  faEye,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Row, Table } from "react-bootstrap";

const MainClientes = ({ clientes, handleVer, handleEditar, handleDelete }) => {
  return (
    <div className="d-flex flex-column align-items-center">
      <h3>Clientes</h3>
      <div className="container-table">
        <Table striped bordered hover className="table-admin">
          <thead>
            <tr className="th-admin">
              <th>Id</th>
              <th>Usuario</th>
              <th>Email</th>
              <th>Telefono</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {clientes != undefined &&
              clientes.map((cliente) => (
                <tr key={cliente.id_cliente} className="tr-admin">
                  <td>{cliente.id_cliente}</td>
                  <td>{cliente.usuario}</td>
                  <td>{cliente.email_cliente}</td>
                  <td>{cliente.telefono_cliente}</td>
                  <td>
                    <Row className="gx-0">
                      <Col
                        md={4}
                        sm={12}
                        className="d-flex justify-content-center"
                      >
                        <button
                          className="admin-button d-flex align-items-center justify-content-center"
                          onClick={() => handleVer(cliente.id_cliente)}
                        >
                          Ver{" "}
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
                          onClick={() => handleEditar(cliente.id_cliente)}
                        >
                          Editar{" "}
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
                          onClick={() => handleDelete(cliente.id_cliente)}
                        >
                          Eliminar{" "}
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
    </div>

  );
};

export default MainClientes;
