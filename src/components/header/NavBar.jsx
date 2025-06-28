import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useStore } from "../../store/AuthStore";
import "../../css/modo_claro/ModoClaro.css";
import "../../css/modo_oscuro/ModoOscuro.css";
import "../../css/navbar/navbar.css";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";

const NavBar = () => {

  const { color, changeColor } = useStore();
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [user, setUser] = useState(null);
  const [mostrarSinUsuario, setMostrarSinUsuario] = useState(false);
  const [mostrarCliente, setMostrarCliente] = useState(false);
  const [mostrarCaja, setMostrarCaja] = useState(false);
  const [mostrarAdmin, setMostrarAdmin] = useState(false);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  useEffect(() => {
    const usuario = localStorage.getItem("usuario");
    if (usuario) {
      setUser(JSON.parse(usuario));
    }
  }, []);

  useEffect(() => {
    const usuario = localStorage.getItem("usuario");

    if (usuario) {
      const parsedUser = JSON.parse(usuario);
      setUser(parsedUser);

      if (parsedUser.rol === "empleado") {
        setMostrarCliente(true);
        setMostrarCaja(true);
      } else if (parsedUser.rol === "admin") {
        setMostrarCliente(true);
        setMostrarAdmin(true);
      } else {
        setMostrarCliente(true); // tiene usuario pero sin rol
      }
    } else {
      setMostrarSinUsuario(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("usuario");
    setUser(null);
    setMostrarSinUsuario(true);
    setMostrarCliente(false);
    setMostrarCaja(false);
    setMostrarAdmin(false);
  };

  return (
    <div
      className={`navbar-container ${
        color === "Claro" ? "modo-claro" : "modo-oscuro"
      }`}
    >
      <nav className="navbar-custom">
        <div className="logo-title">
          <Link to="/">
            <img src="/icono.png" alt="Logo" className="logo-img" />
          </Link>
          <h2 className="title-principal">MIS CANCHAS</h2>
        </div>

        {/* Botón hamburguesa (mobile) */}
        <div className="menu-icon" onClick={toggleMenu}>
          {menuAbierto ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        {/* Links condicionales */}
        <div className={`nav-links ${menuAbierto ? "open" : ""}`}>
          {mostrarSinUsuario && (
            <>
              <Link to="/login">Iniciar Sesión</Link>
              <Link to="/register">Registrarse</Link>
            </>
          )}

          {mostrarCliente && (
            <>
              <Link to="/reservas">Reservas</Link>
              <Link to="/mis-reservas">Mis Reservas</Link>
            </>
          )}

          {mostrarCaja && <Link to="/caja">Caja</Link>}
          {mostrarAdmin && <Link to="/admin">Admin</Link>}

          {!mostrarSinUsuario && (
            <button onClick={handleLogout} className="logout-button">
              Cerrar Sesión
            </button>
          )}

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
