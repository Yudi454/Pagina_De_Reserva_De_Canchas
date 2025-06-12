import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Calendario = () => {
  const [fecha, setFecha] = useState(null);

  return (
    <div style={{ textAlign: "center", marginTop: "5px" }}>
      <p>Dia:</p>
      <DatePicker
        selected={fecha}
        onChange={(date) => setFecha(date)}
        dateFormat="dd/MM/yyyy"
        placeholderText="Elige una fecha"
      />
    </div>
  );
};

export default Calendario;
