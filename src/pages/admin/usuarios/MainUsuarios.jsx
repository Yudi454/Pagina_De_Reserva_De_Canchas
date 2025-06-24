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
            <th>Apellido</th>
            <th>Telefono</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarios != undefined &&
            usuarios.map((usuario) => (
              <tr key={usuario.id}>
                <td>{usuario.id}</td>
                <td>{usuario.nombre}</td>
                <td>{usuario.apellido}</td>
                <td>{usuario.telefono}</td>
                <td>
                  <Button onClick={() => handleVer(usuario.id)}>Ver</Button>
                  <Button onClick={() => handleEditar(usuario.id)}>
                    Editar
                  </Button>
                  <Button onClick={() => handleDelete(usuario.id)}>
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
