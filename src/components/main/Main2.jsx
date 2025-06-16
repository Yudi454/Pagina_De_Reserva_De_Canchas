import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import "../../css/home/main2.css";

const Main2 = () => {

    const [datos, setDatos] = useState([]);

  const getDatos = async () => {
    try {
      const response = await axios.get("http://localhost:3000/canchas");
      setDatos(response.data);
    } catch (error) {
      console.error("Error al obtener los datos", error);
    }
  };

  useEffect(() => {
    getDatos();
  }, []);

  return (
    <>
    <div className="main2-fondo">
    <br />
    <br />
    <h2 className="titulo-canchas text-center "> Canchas </h2>
    <div className="card-grid">
      {datos.map((dato) => (
        <div key={dato.nombre} className="canchas-wrapper">
          <h3 className="canchas-title">{dato.nombre}</h3>

          <div
            className="canchas-card"
            style={{
              backgroundImage: `url(${dato.imagen})`,
            }}
          >
            <div className="card-overlay">
              <p>{dato.descripcion}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
    <br />
    <br />
    </div>
    </>
  )
}

export default Main2