import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useStore } from "../../store/AuthStore";
import "../../css/modo_claro/ModoClaro.css";
import "../../css/modo_oscuro/ModoOscuro.css";
import "../../css/navbar/navbar.css";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";

const NavBar = () => {
  const { color, changeColor } = useStore();
  const [user, setUser] = useState(null);
  const [menuAbierto, setMenuAbierto] = useState(false);


  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("usuario");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("usuario"); // Elimina el usuario del localStorage
    setUser(null); // Limpia el estado local
    <Link to="/"></Link>;
  };

  let sinLoguear = "";
  let linksClientes = "";
  let linksRoles = "";
  let Desloguearboton = "";

  if (!user) {
    sinLoguear = (
      <>
        <Link to="/login">Iniciar Sesión</Link>
        <Link to="/register">Registrarse</Link>
      </>
    );
  } else {
    linksClientes = (
      <>
        <Link to="/reservas">Reservas</Link>
        <Link to="/mis-reservas">Mis Reservas</Link>
      </>
    );

    if (user.rol === "empleado") {
      linksRoles = <Link to="/caja">Caja</Link>;
    }

    if (user.rol === "admin") {
      linksRoles = <Link to="/admin">Admin</Link>;
    }

    Desloguearboton = (
      <button onClick={handleLogout} className="logout-button">
        Cerrar Sesión
      </button>
    );
  }

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

        {/* Botón hamburguesa (solo visible en móvil) */}
        <div className="menu-icon" onClick={toggleMenu}>
          {menuAbierto ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        {/* Links del nav (se ocultan o muestran en móvil) */}
        <div className={`nav-links ${menuAbierto ? "open" : ""}`}>
          {sinLoguear}
          {linksClientes}
          {linksRoles}
          {Desloguearboton}
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
