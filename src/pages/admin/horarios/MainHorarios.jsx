import {
  faEye,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Row, Table } from "react-bootstrap";

const MainHorarios = ({ horarios, handleDelete, handleEditar, handleVer }) => {
  return (
    <>
      <h3>Horarios</h3>
      <div className="table-responsive-sm">
        <Table striped bordered hover className="table-admin">
          <thead className="th-admin">
            <tr>
              <th>Id</th>
              <th>Hora de inicio</th>
              <th>Hora de fin</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {horarios != undefined &&
              horarios.map((horario) => (
                <tr key={horario.id_horario} className="tr-admin">
                  <td>{horario.id_horario}</td>
                  <td>{horario.hora_inicio}</td>
                  <td>{horario.hora_fin}</td>
                  <td>
                    <Row className="gx-0">
                      <Col
                        md={4}
                        sm={12}
                        className="d-flex justify-content-center"
                      >
                        <button
                          className="admin-button d-flex align-items-center justify-content-center"
                          onClick={() => handleVer(horario.id_horario)}
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
                          onClick={() => handleEditar(horario.id_horario)}
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
                          onClick={() => handleDelete(horario.id_horario)}
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

export default MainHorarios;
