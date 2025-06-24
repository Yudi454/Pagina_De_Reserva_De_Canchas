import { Button, Table } from "react-bootstrap";

const MainCanchas = ({ canchas, handleEditar, handleVer, handleDelete }) => {
  return (
    <>
      <h3>Canchas</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
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
              <tr key={cancha.id}>
                <td>{cancha.id}</td>
                <td>{cancha.imagen}</td>
                <td>{cancha.tipo}</td>
                <td>{cancha.precio}</td>
                <td>
                  <Button onClick={() => handleVer(cancha.id)}>Ver</Button>
                  <Button onClick={() => handleEditar(cancha.id)}>
                    Editar
                  </Button>
                  <Button onClick={() => handleDelete(cancha.id)}>
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

export default MainCanchas;
