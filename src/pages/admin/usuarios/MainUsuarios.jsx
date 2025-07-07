import { faEye, faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Table } from "react-bootstrap";

const MainUsuarios = ({ usuarios, handleVer, handleEditar, handleDelete }) => {
  return (
    <>
      <h3>Usuarios</h3>
      <div className="container-table">
        <Table striped bordered hover className="table-admin">
          <thead>
            <tr>
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
                    <button className="admin-button" onClick={() => handleVer(usuario.id_usuario)}>
                      Ver
                      <FontAwesomeIcon icon={faEye} className="icon-admin" />
                    </button>
                    <button className="admin-button-editar" onClick={() => handleEditar(usuario.id_usuario)}>
                      Editar
                      <FontAwesomeIcon
                        icon={faPenToSquare}
                        className="icon-admin"
                      />
                    </button>
                    <button className="admin-button-delete" onClick={() => handleDelete(usuario.id_usuario)}>
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

export default MainUsuarios;
