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
              <tr key={cancha.id_cancha}>
                <td>{cancha.id_cancha}</td>
                <td>{cancha.imagen_cancha}</td>
                <td>{cancha.tipo_cancha}</td>
                <td>{cancha.precio_cancha}</td>
                <td>
                  <Button onClick={() => handleVer(cancha.id_cancha)}>
                    Ver
                  </Button>
                  <Button onClick={() => handleEditar(cancha.id_cancha)}>
                    Editar
                  </Button>
                  <Button onClick={() => handleDelete(cancha.id_cancha)}>
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
