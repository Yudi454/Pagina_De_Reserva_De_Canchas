import {
  faEye,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Col, Row, Table } from "react-bootstrap";

const MainUsuarios = ({ usuarios, handleVer, handleEditar, handleDelete }) => {
  return (
    <>
      <h3>Usuarios</h3>
      <div className="container-table">
        <Table striped bordered hover className="table-admin">
          <thead>
            <tr className="th-admin">
              <th>Id</th>
              <th>Nombre</th>
              <th>DNI</th>
              <th>Telefono</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {usuarios != undefined &&
              usuarios.map((usuario) => (
                <tr key={usuario.id_usuario} className="tr-admin">
                  <td>{usuario.id_usuario}</td>
                  <td>
                    {usuario.nombre_usuario}-{usuario.apellido_usuario}
                  </td>
                  <td>{usuario.dni}</td>
                  <td>{usuario.telefono_usuario}</td>
                  <td>
                    <Row className="gx-0">
                      <Col
                        md={4}
                        sm={12}
                        className="d-flex justify-content-center"
                      >
                        <button
                          className="admin-button d-flex align-items-center justify-content-center"
                          onClick={() => handleVer(usuario.id_usuario)}
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
                          onClick={() => handleEditar(usuario.id_usuario)}
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
                          onClick={() => handleDelete(usuario.id_usuario)}
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

export default MainUsuarios;
