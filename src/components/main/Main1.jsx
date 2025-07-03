import React from "react";
import { Link } from "react-router-dom";
import "../../css/home/main1.css";

const Main1 = () => {
  return (
    <>
      <div className="main1-fondo">
        <div className="main1-overlay">
          <h2 className="maquina-escribir">
            ¡Reserva tu cancha en segundos!
          </h2>
        </div>
      </div >
      <div className="contenedor-boton-reservar">
        <Link to="/reservar-Cancha">
        <button className="boton-reservar">RESERVAR AHORA</button>
      </Link>
      </div>
    </>
  );
};

export default Main1;
