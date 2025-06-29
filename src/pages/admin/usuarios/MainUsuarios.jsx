import { Button, Table } from "react-bootstrap";

const MainUsuarios = ({ usuarios, handleVer, handleEditar, handleDelete }) => {
  return (
    <>
      <h3>Usuarios</h3>
      <Table striped bordered hover>
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
              <tr key={usuario.id_usuario}>
                <td>{usuario.id_usuario}</td>
                <td>
                  {usuario.nombre_usuario}-{usuario.apellido_usuario}
                </td>
                <td>{usuario.dni}</td>
                <td>{usuario.telefono_usuario}</td>
                <td>
                  <Button onClick={() => handleVer(usuario.id_usuario)}>
                    Ver
                  </Button>
                  <Button onClick={() => handleEditar(usuario.id_usuario)}>
                    Editar
                  </Button>
                  <Button onClick={() => handleDelete(usuario.id_usuario)}>
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
};

export default MainUsuarios;
