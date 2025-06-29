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

  const user = useStore((state) => state.user);
  const setUser = useStore((state) => state.setUser);

  console.log(user);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  useEffect(() => {
    if (localStorage.getItem("usuarios")) {
      setUser(JSON.parse(localStorage.getItem("usuario"))[0]);
    }
  }, []);

  if (user) {
    console.log(user.rol);
  }

  const handleLogout = () => {
    localStorage.removeItem("usuario");
    setUser(null);
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

        <div className="nav-links">
          {/* Links condicionales */}
          {user === null && (
            <>
              <Link to="/login">Iniciar Sesión</Link>
              <Link to="/register">Registrarse</Link>
            </>
          )}
          {user && user.rol === undefined && (
            <>
              <Link to="/reservas">Reservas</Link>
              <Link to="/mis-reservas">Mis Reservas</Link>
            </>
          )}
          {user && user.rol === "empleado" && <Link to="/caja">Caja</Link>}
          {user && user.rol === "admin" && <Link to="/admin">Admin</Link>}

          {user && (
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
