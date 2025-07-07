import {
  faEye,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Row, Table } from "react-bootstrap";

const MainProductos = ({
  productos,
  handleDelete,
  handleEditar,
  handleVer,
}) => {
  return (
    <>
      <h3>Productos</h3>
      <div className="container-table">
        <Table striped bordered hover className="table-admin">
          <thead>
            <tr className="th-admin">
              <th>Id</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Stock</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productos != undefined &&
              productos.map((producto) => (
                <tr key={producto.id_producto} className="tr-admin">
                  <td>{producto.id_producto}</td>
                  <td>{producto.nombre_producto}</td>
                  <td>{producto.precio_producto}</td>
                  <td>{producto.stock}</td>
                  <td>
                    <Row className="gx-0">
                      <Col
                        md={4}
                        sm={12}
                        className="d-flex justify-content-center"
                      >
                        <button
                          className="admin-button d-flex align-items-center justify-content-center"
                          onClick={() => handleVer(producto.id_producto)}
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
                          onClick={() => handleEditar(producto.id_producto)}
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
                          onClick={() => handleDelete(producto.id_producto)}
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

export default MainProductos;
