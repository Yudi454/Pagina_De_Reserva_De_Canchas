import React from "react";
import { Link } from "react-router-dom";
import { useStore } from "../../store/AuthStore";
import "../../css/modo_claro/ModoClaro.css";
import "../../css/modo_oscuro/ModoOscuro.css";
import "../../css/navbar/navbar.css";
import { FaSun, FaMoon } from "react-icons/fa";

const NavBar = () => {
  const { color, changeColor } = useStore();

  return (
    <div
      className={`navbar-container ${
        color === "Claro" ? "modo-claro" : "modo-oscuro"
      }`}
    >
      <nav className="navbar-custom">
        <div className="logo">
          <Link to="/">
            <img src="/.png" alt="Logo" className="logo-img" />
          </Link>
        </div>

        <div className="nav-links">
          <Link to="/login">Iniciar Sesión</Link>
          <Link to="/register">Registrarse</Link>
          <button
            className="color-toggle"
            onClick={() => changeColor(color === "Claro" ? "Oscuro" : "Claro")}
          >
            {color === "Claro" ? <FaMoon size={25} /> : <FaSun size={25} />}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
