import React, { useState, useEffect } from "react";
import { useStore } from '../../store/AuthStore';
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
  const { color } = useStore();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const datos = [
    {
      icon: <FaWhatsapp size={30} />,
      titulo: "Whatsapp",
      texto: ["0381-345-333", "0381-456-677"],
    },
    {
      icon: <FaInstagram size={30} />,
      titulo: "Instagram",
      texto: ["@misCanchasok"],
    },
    {
      icon: <FaFacebook size={30} />,
      titulo: "Facebook",
      texto: ["Mis Canchas"],
    },
    {
      icon: <FaPhoneAlt size={30} />,
      titulo: "Teléfono",
      texto: ["Teléfono fijo:", "0800-4444-444"],
    },
    {
      icon: <FaClock size={30} />,
      titulo: "Horarios",
      texto: ["Lunes a viernes", "08:00 a 21:00"],
    },
  ];

  return (
    <div className={color === 'Claro' ? 'modo-claro' : 'modo-oscuro'}>
      <div className="contacto-redes">
      <h2 className="contacto-titulo">Contacto y redes</h2>
      <div className="redes-container">
        {datos.map((item, index) => (
          <div className="card-red" key={index}>
            {item.icon}
            <p className="titulo">{item.titulo}</p>
            {item.texto.map((linea, idx) => (
              <p key={idx}>{linea}</p>
            ))}
          </div>
        ))}
      </div>

      {isVisible && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      )}
    </div>
    </div>
  );
};

export default ContactoRedes;

