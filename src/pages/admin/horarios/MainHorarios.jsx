import { faEye, faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Table } from "react-bootstrap";

const MainHorarios = ({ horarios, handleDelete, handleEditar, handleVer }) => {
  return (
    <>
      <h3>Horarios</h3>
      <div className="container-table">
        <Table striped bordered hover className="table-admin">
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
                <tr key={horario.id_horario} className="tr-admin">
                  <td>{horario.id_horario}</td>
                  <td>{horario.hora_inicio}</td>
                  <td>{horario.hora_fin}</td>
                  <td>
                    <Button onClick={() => handleVer(horario.id_horario)}>
                      Ver
                      <FontAwesomeIcon icon={faEye} className="icon-admin" />
                    </Button>
                    <Button onClick={() => handleEditar(horario.id_horario)}>
                      Editar
                      <FontAwesomeIcon
                        icon={faPenToSquare}
                        className="icon-admin"
                      />
                    </Button>
                    <Button onClick={() => handleDelete(horario.id_horario)}>
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

export default MainHorarios;
