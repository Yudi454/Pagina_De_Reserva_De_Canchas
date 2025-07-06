import React from "react";
import "../../css/home/servicios.css";

const Servicios = () => {
  return (
    <>
      <div className="container text-center my-5">
        <br />
        <h2 className="title-servicios">
          Características Clave de nuestros servicios
        </h2>
        <br />
        <h2 className="informacion">
          "MIS CANCHAS" te brinda una plataforma integral para llevar tu
          experiencia deportiva al siguiente nivel. Ya sea que estés buscando el
          lugar perfecto para un partido amistoso, estamos aquí para vos.
          Descubí cómo nuestras características únicas pueden mejorar tu
          experiencia deportiva.
        </h2>
        <br />
        <br />
        <div className="row justify-content-center">
          <div className="col-md-4 mb-4">
            <div className="card servicio-card h-100">
              <video
                src="/estacionamiento.mp4"
                className="media-servicio"
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="card-body">
                <h5 className="card-title">Estacionamiento Gratuito</h5>
                <p className="card-text">
                  Contamos con espacio de estacionamiento sin costo adicional.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card servicio-card h-100">
              <video
                src="/cambiadores.mp4"
                className="media-servicio"
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="card-body">
                <h5 className="card-title">Vestuarios y Duchas</h5>
                <p className="card-text">
                  Áreas cómodas e higiénicas para cambiarte y asearte.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card servicio-card h-100">
              <video
                src="/bebidas.mp4"
                className="media-servicio"
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="card-body">
                <h5 className="card-title">Kioscos y Bebidas Frías</h5>
                <p className="card-text">
                  Amplia variedad de snacks y bebidas disponibles.
                </p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="mapa-container mt-5">
          <h4 className="titulo-mapa">¿Dónde nos encontramos?</h4>
          <br />
          <br />
          <br />
          <iframe
            title="Ubicación"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.389233506528!2d-65.20926408466933!3d-26.83651948316205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c7b493de3e3%3A0xb00f69e16b66aa67!2sSan%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n!5e0!3m2!1ses!2sar!4v1686071616829!5m2!1ses!2sar"
            width="78%"
            height="350"
            style={{ border: 0, borderRadius: "12px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <br />
        <br />
        <br />
      </div>
    </>
  );
};

export default Servicios;
