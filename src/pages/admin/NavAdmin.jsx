import { Link } from "react-router-dom";
import Caja from "./caja/Caja";
import { Col, Row } from "react-bootstrap";

const MainAdmin = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/admin/caja">Caja</Link>
        </li>
        <li>
          <Link to="/admin/clientes">Clientes</Link>
        </li>
        <li>
          <Link to="/admin/usuarios">Usuarios</Link>
        </li>
        <li>
          <Link to="/admin/productos">Productos</Link>
        </li>
        <li>
          <Link to="/admin/ventas">Ventas</Link>
        </li>
        <li>
          <Link to="/admin/proveedores">Proveedores</Link>
        </li>
        <li>
          <Link to="/admin/canchas">Canchas</Link>
        </li>
        <li>
          <Link to="/admin/horarios">Horarios</Link>
        </li>
        <li>
          <p  class="disabled" to="/admin/reservas">Reservas</p>
        </li>
      </ul>
    </>
  );
};

export default MainAdmin;
