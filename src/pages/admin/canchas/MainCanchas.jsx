import {
  faEye,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Row, Table } from "react-bootstrap";
import { useStore } from "../../../store/AuthStore";

const MainCanchas = ({ canchas, handleEditar, handleVer, handleDelete }) => {
  const { color } = useStore();

  return (
    <>
      <div className={color === "Claro" ? "modo-claro" : "modo-oscuro"}>
        <h3>Canchas</h3>
        <div className="container-table">
          <Table striped bordered hover className="table-admin">
            <thead>
              <tr className="th-admin">
                <th>Id</th>
                <th>Imagen</th>
                <th>Tipo</th>
                <th>Precio</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {canchas != undefined &&
                canchas.map((cancha) => (
                  <tr key={cancha.id_cancha} className="tr-admin">
                    <td>{cancha.id_cancha}</td>
                    <td>
                      <img
                        src={cancha.imagen_cancha}
                        className="img-fluid"
                        style={{ maxWidth: "120px" }}
                      />
                    </td>
                    <td>{cancha.tipo_cancha}</td>
                    <td>{cancha.precio_cancha}</td>
                    <td>
                      <Row className="gx-0">
                        <Col
                          md={4}
                          sm={12}
                          className="d-flex justify-content-center"
                        >
                          <button
                            className="admin-button d-flex align-items-center justify-content-center"
                            onClick={() => handleVer(cancha.id_cancha)}
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
                            onClick={() => handleEditar(cancha.id_cancha)}
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
                            onClick={() => handleDelete(cancha.id_cancha)}
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
      </div>
    </>
  );
};

export default MainCanchas;
