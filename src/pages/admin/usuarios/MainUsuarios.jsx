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
                    <Button onClick={() => handleVer(usuario.id_usuario)}>
                      Ver
                      <FontAwesomeIcon icon={faEye} className="icon-admin" />
                    </Button>
                    <Button onClick={() => handleEditar(usuario.id_usuario)}>
                      Editar
                      <FontAwesomeIcon
                        icon={faPenToSquare}
                        className="icon-admin"
                      />
                    </Button>
                    <Button onClick={() => handleDelete(usuario.id_usuario)}>
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

export default MainUsuarios;
