import { Button, Table } from "react-bootstrap";

const MainHorarios = ({horarios,handleDelete,handleEditar,handleVer}) => {
  return (
    <>
      <h3>Horarios</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Hora de inicio</th>
            <th>Hora de fin</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {horarios != undefined &&
            horarios.map((horario) => (
              <tr key={horario.id_horario}>
                <td>{horario.id_horario}</td>
                <td>{horario.hora_inicio}</td>
                <td>{horario.hora_fin}</td>
                <td>
                  <Button onClick={() => handleVer(horario.id_horario)}>Ver</Button>
                  <Button onClick={() => handleEditar(horario.id_horario)}>
                    Editar
                  </Button>
                  <Button onClick={() => handleDelete(horario.id_horario)}>
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

export default MainHorarios;
