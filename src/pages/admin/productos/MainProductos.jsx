import { faEye, faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  Table } from "react-bootstrap";

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
            <tr>
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
                    <button className="admin-button" onClick={() => handleVer(producto.id_producto)}>
                      Ver
                      <FontAwesomeIcon icon={faEye} className="icon-admin" />
                    </button>
                    <button className="admin-button-editar" onClick={() => handleEditar(producto.id_producto)}>
                      Editar
                      <FontAwesomeIcon
                        icon={faPenToSquare}
                        className="icon-admin"
                      />
                    </button>
                    <button className="admin-button-delete" onClick={() => handleDelete(producto.id_producto)}>
                      Eliminar
                      <FontAwesomeIcon icon={faTrash} className="icon-admin" />
                    </button>
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
