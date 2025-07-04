import React from "react";
import { useState, useEffect } from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaPhoneAlt,
  FaClock,
  FaArrowUp,
} from "react-icons/fa";
import "../../css/home/contactoRedes.css";

const ContactoRedes = () => {
  const [isVisible, setIsVisible] = useState(false);    {/* estado para la scroll */}

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  {/* cards con los contactos */}
  return (
    <div className="contacto-redes text-center ">
      <h2>Contacto y redes</h2>
      <br />
      <div className="redes mt-4">
        <div className="icon">
          <FaWhatsapp size={30} />
          <p>Whatsapp</p>
          <p>0381-345-333</p>
          <p>0381-456-677</p>
        </div>
        <div className="icon">
          <FaInstagram size={30} />
          <p>Instagram</p>
          <p>instagram-nombre</p>
        </div>
        <div className="icon">
          <FaFacebook size={30} />
          <p>Facebook</p>
          <p>facebook-nombre</p>
        </div>
        <div className="icon">
          <FaPhoneAlt size={30} />
          <p>Teléfono</p>
          <p>Teléfono fijo:</p>
          <p>0800-4444-444</p>
        </div>
        <div className="icon">
          <FaClock size={30} />
          <p>Horarios </p>
          <p>De lunes a viernes de 08:00 hasta las 21:00</p>
        </div>
      </div>

      {/* Botón subir arriba */}
      {isVisible && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default ContactoRedes;
