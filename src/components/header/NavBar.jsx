import { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { useStore } from "../../store/AuthStore";
import "../../css/modo_claro/ModoClaro.css";
import "../../css/modo_oscuro/ModoOscuro.css";
import "../../css/navbar/navbar.css";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import { createDato, logout } from "../../customHooks/UseApi";
import { Button, Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import { rutas } from "../../routes/Rutas";

const NavBar = () => {
  const { color, changeColor } = useStore();
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const user = useStore((state) => state.user);
  const setUser = useStore((state) => state.setUser);
  const carrito = useStore((state) => state.carritoReservas);
  const quitarReserva = useStore((state) => state.quitarReserva);
  const agregarReserva = useStore((state) => state.agregarReserva);
  const cargarCarrito = useStore((state) => state.cargarCarritoReservas);

  const API_RUTE = import.meta.env.VITE_API_URL;

  const RUTA_RESERVAS = `${API_RUTE}${rutas.reservas}`;

  useEffect(() => {
    if (localStorage.getItem("carritoReservas")) {
      if (JSON.parse(localStorage.getItem("carritoReservas")).length > 0) {
        cargarCarrito(JSON.parse(localStorage.getItem("carritoReservas")));
      }
    }
  }, []);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  useEffect(() => {
    if (localStorage.getItem("usuarios")) {
      setUser(JSON.parse(localStorage.getItem("usuario"))[0]);
    }
  }, []);

  const handleLogout = () => {
    logout();
    setUser(null);
    Navigate("/login");
  };

  const cargarReservas = async () => {
    try {
      const id_cliente = JSON.parse(localStorage.getItem("usuario")).id_cliente;
      await createDato(
        `${RUTA_RESERVAS}/cargarReservas/${id_cliente}`,
        carrito
      );
      handleClose();
      localStorage.removeItem("carritoReservas");
      toast.success("Reservas cargadas con exito");
    } catch (error) {
      toast(error);
    }
  };

  const eliminarReserva = async (r, index) => {
    quitarReserva(index);

    let carritoStorage = JSON.parse(localStorage.getItem("carritoReservas"));

    const carritoFinal = carritoStorage.filter((r, i) => i !== index);

    localStorage.setItem("carritoReservas", JSON.stringify(carritoFinal));
  };

  

  return (
    <>
      <div className={color === "Claro" ? "modo-claro" : "modo-oscuro"}>
        <div className="navbar-container">
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

            <div className={`nav-links ${menuAbierto ? "show" : ""}`}>
              {/* Links condicionales */}
              {user === null && (
                <>
                  <Link to="/login">Iniciar Sesión</Link>
                  <Link to="/register">Registrarse</Link>
                </>
              )}
              {user && user.rol === undefined && (
                <>
                  <Link to="/reservar-Cancha">Reservas</Link>
                </>
              )}
              {user && user.rol === "empleado" && <Link to="/caja">Caja</Link>}
              {user && user.rol === "admin" && <Link to="/admin">Admin</Link>}

              {carrito && carrito.length > 0 && (
                <>
                  <Button onClick={handleShow}>Carrito</Button>

                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Carrito de Reservas</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      {carrito.length === 0 ? (
                        <p>No hay reservas en el carrito.</p>
                      ) : (
                        <ul>
                          {carrito.map((r, index) => (
                            <li key={index}>
                              Fecha: {r.fecha_reserva} - Horario: {r.horario} -{" "}
                              {r.id_cancha}
                              <Button
                                onClick={() => {
                                  eliminarReserva(r, index);
                                }}
                              >
                                Eliminar
                              </Button>
                            </li>
                          ))}
                        </ul>
                      )}
                    </Modal.Body>
                    <Modal.Footer>
                      <Button onClick={cargarReservas}>Cargar Reservas</Button>
                      <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </>
              )}

              {user && (
                <button onClick={handleLogout} className="logout-button">
                  Cerrar Sesión
                </button>
              )}

              <button
                className="color-toggle"
                onClick={() =>
                  changeColor(color === "Claro" ? "Oscuro" : "Claro")
                }
              >
                {color === "Claro" ? <FaMoon size={25} /> : <FaSun size={25} />}
              </button>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default NavBar;
