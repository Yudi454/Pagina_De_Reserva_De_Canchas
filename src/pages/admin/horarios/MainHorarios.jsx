import { faEye, faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  Table } from "react-bootstrap";

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
                    <button className="admin-button" onClick={() => handleVer(horario.id_horario)}>
                      Ver
                      <FontAwesomeIcon icon={faEye} className="icon-admin" />
                    </button>
                    <button className="admin-button-editar" onClick={() => handleEditar(horario.id_horario)}>
                      Editar
                      <FontAwesomeIcon
                        icon={faPenToSquare}
                        className="icon-admin"
                      />
                    </button>
                    <button className="admin-button-delete" onClick={() => handleDelete(horario.id_horario)}>
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

export default MainHorarios;
