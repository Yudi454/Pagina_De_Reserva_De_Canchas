import React from "react";
import Button from "react-bootstrap/Button";

const ReservaItem = ({ reserva, onEliminar }) => (
  <>
    <div>
      <strong>Cancha:</strong> {reserva.tipo_cancha} –{" "}
      <strong>Total:</strong> ${reserva.precio_cancha}
    </div>
    <div>
      <strong>Día:</strong> {reserva.dia_reserva.slice(0, 10)} –{" "}
      <strong>Horario:</strong> {reserva.hora_inicio.slice(0, 5)}/
      {reserva.hora_fin.slice(0, 5)}
      <Button
        style={{ marginLeft: "20px" }}
        variant="danger"
        size="sm"
        onClick={() => onEliminar(reserva.id_reserva)}
      >
        Eliminar
      </Button>
    </div>
  </>
);

export default ReservaItem;