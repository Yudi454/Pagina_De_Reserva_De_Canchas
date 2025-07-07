import {
  faEye,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Collapse, Row, Table } from "react-bootstrap";

const MainProveedores = ({
  proveedores,
  handleVer,
  handleEditar,
  handleDelete,
}) => {
  return (
    <>
      <h3>Proveedores</h3>
      <div className="table-responsive-sm">
        <Table striped bordered hover className="table-admin">
          <thead>
            <tr className="th-admin">
              <th>Id</th>
              <th>Nombre</th>
              <th>Email</th>
              <th>Telefono</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {proveedores != undefined &&
              proveedores.map((proveedor) => (
                <tr key={proveedor.id_proveedor} className="tr-admin">
                  <td>{proveedor.id_proveedor}</td>
                  <td>{proveedor.nombre_proveedor}</td>
                  <td>{proveedor.email_proveedor}</td>
                  <td>{proveedor.telefono_proveedor}</td>
                  <td>
                    <Row className="gx-0">
                      <Col
                        md={4}
                        sm={12}
                        className="d-flex justify-content-center"
                      >
                        <button
                          className="admin-button d-flex align-items-center justify-content-center"
                          onClick={() => handleVer(proveedor.id_proveedor)}
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
                          onClick={() => handleEditar(proveedor.id_proveedor)}
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
                          onClick={() => handleDelete(proveedor.id_proveedor)}
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

export default MainProveedores;
