import { Button, Table } from "react-bootstrap";

const MainReservas = ({ reservas, handleDelete, handleVer, handleEditar }) => {
  return (
    <>
      <h3>Reservas</h3>
      <Table striped bordered hover>
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
              <tr key={reserva.id_reserva}>
                <td>{reserva.id_reserva}</td>
                <td>{reserva.usuario}</td>
                <td>{reserva.total}</td>
                <td>{reserva.dia_reserva}</td>
                <td>{reserva.hora_inicio}-{reserva.hora_fin}</td>
                <td>
                  <Button onClick={() => handleVer(reserva.id_reserva)}>Ver</Button>
                  <Button onClick={() => handleEditar(reserva.id_reserva)}>
                    Editar
                  </Button>
                  <Button onClick={() => handleDelete(reserva.id_reserva)}>
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

export default MainReservas;
