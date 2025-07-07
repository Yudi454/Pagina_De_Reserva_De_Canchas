import { faEye, faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Table } from "react-bootstrap";

const MainReservas = ({ reservas, handleDelete, handleVer, handleEditar }) => {
  return (
    <>
      <h3>Reservas</h3>
      <div className="container-table">
        <Table striped bordered hover className="table-admin">
          <thead>
            <tr>
              <th>Id</th>
              <th>Usuario</th>
              <th>Total</th>
              <th>Dia</th>
              <th>Horario</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {reservas != undefined &&
              reservas.map((reserva) => (
                <tr key={reserva.id_reserva} className="tr-admin">
                  <td>{reserva.id_reserva}</td>
                  <td>{reserva.usuario}</td>
                  <td>{reserva.total}</td>
                  <td>{reserva.dia_reserva}</td>
                  <td>
                    {reserva.hora_inicio}-{reserva.hora_fin}
                  </td>
                  <td>
                    <button className="admin-button" onClick={() => handleVer(reserva.id_reserva)}>
                      Ver
                      <FontAwesomeIcon icon={faEye} className="icon-admin" />
                    </button>
                    <button className="admin-button-editar" onClick={() => handleEditar(reserva.id_reserva)}>
                      Editar
                      <FontAwesomeIcon
                        icon={faPenToSquare}
                        className="icon-admin"
                      />
                    </button>
                    <button  className="admin-button-delete" onClick={() => handleDelete(reserva.id_reserva)}>
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

export default MainReservas;
