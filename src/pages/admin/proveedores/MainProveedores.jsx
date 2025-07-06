import {
  faEye,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Table } from "react-bootstrap";

const MainProveedores = ({
  proveedores,
  handleVer,
  handleEditar,
  handleDelete,
}) => {
  return (
    <>
      <h3>Proveedores</h3>
      <div className="container-tabla">
        <Table striped bordered hover className="table-admin">
          <thead>
            <tr>
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
                    <Button onClick={() => handleVer(proveedor.id_proveedor)}>
                      Ver
                      <FontAwesomeIcon icon={faEye} className="icon-admin" />
                    </Button>
                    <Button
                      onClick={() => handleEditar(proveedor.id_proveedor)}
                    >
                      Editar
                      <FontAwesomeIcon
                        icon={faPenToSquare}
                        className="icon-admin"
                      />
                    </Button>
                    <Button
                      onClick={() => handleDelete(proveedor.id_proveedor)}
                    >
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

export default MainProveedores;
