import React, { useState } from "react";
import { useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Calendario = ({handleFecha}) => {
  const [fecha, setFecha] = useState(new Date());

  const formatearFecha = (date) => {
    return date.toISOString().split("T")[0]; 
  };

  useEffect(()=>{
    handleFecha(formatearFecha(fecha))
  },[])

  const handleChange=(nuevaFecha)=>{
    setFecha(nuevaFecha)
    handleFecha(formatearFecha(nuevaFecha))
  }

  return (
    <div style={{ textAlign: "center", marginTop: "5px" }}>
      <p>Dia:</p>
      <DatePicker
        selected={fecha}
        onChange={handleChange}
        dateFormat="yyyy-MM-dd"
        placeholderText="Elige una fecha"
      />
    </div>
  );
};

export default Calendario;
