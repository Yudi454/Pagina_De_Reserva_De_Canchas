import { Link } from "react-router-dom";
import Caja from "./caja/Caja";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoxOpen,
  faCalendarCheck,
  faCashRegister,
  faClock,
  faFutbol,
  faPlay,
  faReceipt,
  faTruck,
  faUserFriends,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";

const MainAdmin = ({ celular, mostrar }) => {
  return (
    <>
      {!celular ? (
        <div className="nav-admin">
          <ul className="ul-admin">
            <li className="li-admin">
              <Link className="link-admin" to="/admin/caja">
                {mostrar === "caja" && <FontAwesomeIcon icon={faPlay} />} Caja
                <FontAwesomeIcon icon={faCashRegister} className="icon-admin" />
              </Link>
            </li>
            <li className="li-admin">
              <Link className="link-admin" to="/admin/clientes">
                {mostrar === "clientes" && <FontAwesomeIcon icon={faPlay} />}
                Clientes
                <FontAwesomeIcon icon={faUserFriends} className="icon-admin" />
              </Link>
            </li>
            <li className="li-admin">
              <Link className="link-admin" to="/admin/usuarios">
                {mostrar === "usuarios" && <FontAwesomeIcon icon={faPlay} />}{" "}
                Usuarios
                <FontAwesomeIcon icon={faUserTie} className="icon-admin" />
              </Link>
            </li>
            <li className="li-admin">
              <Link className="link-admin" to="/admin/productos">
                {mostrar === "productos" && <FontAwesomeIcon icon={faPlay} />}{" "}
                Productos
                <FontAwesomeIcon icon={faBoxOpen} className="icon-admin" />
              </Link>
            </li>
            <li className="li-admin">
              <Link className="link-admin" to="/admin/ventas">
                {mostrar === "ventas" && <FontAwesomeIcon icon={faPlay} />}{" "}
                Ventas
                <FontAwesomeIcon icon={faReceipt} className="icon-admin" />
              </Link>
            </li>
            <li className="li-admin">
              <Link className="link-admin" to="/admin/proveedores">
                {mostrar === "proveedores" && <FontAwesomeIcon icon={faPlay} />}{" "}
                Proveedores
                <FontAwesomeIcon icon={faTruck} className="icon-admin" />
              </Link>
            </li>
            <li className="li-admin">
              <Link className="link-admin" to="/admin/canchas">
                {mostrar === "canchas" && <FontAwesomeIcon icon={faPlay} />}{" "}
                Canchas
                <FontAwesomeIcon icon={faFutbol} className="icon-admin" />
              </Link>
            </li>
            <li className="li-admin">
              <Link className="link-admin" to="/admin/horarios">
                {mostrar === "horarios" && <FontAwesomeIcon icon={faPlay} />}{" "}
                Horarios
                <FontAwesomeIcon icon={faClock} className="icon-admin" />
              </Link>
            </li>
            <li className="li-admin">
              <Link className="link-admin" to="/admin/reservas">
                {mostrar === "reservas" && <FontAwesomeIcon icon={faPlay} />}{" "}
                Reservas
                <FontAwesomeIcon
                  icon={faCalendarCheck}
                  className="icon-admin"
                />
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <div>
          <Row className="gx-0 d-flex justify-content-center">
            <Col xs={6} className="d-flex justify-content-center">
              <div className="links-admin p-0 ">
                <Link className="link-admin h-100 d-flex justify-content-center" to="/admin/caja">
                  {mostrar === "caja" && <FontAwesomeIcon icon={faPlay} />} Caja
                  <FontAwesomeIcon
                    icon={faCashRegister}
                    className="icon-admin"
                  />
                </Link>
              </div>
            </Col>
            <Col xs={6} className="d-flex justify-content-center ">
              <div className="links-admin p-0 ">
                <Link className="link-admin h-100 d-flex justify-content-center" to="/admin/clientes">
                  {mostrar === "clientes" && <FontAwesomeIcon icon={faPlay} />}
                  Clientes
                  <FontAwesomeIcon
                    icon={faUserFriends}
                    className="icon-admin"
                  />
                </Link>
              </div>
            </Col>
            <Col xs={6} className="d-flex justify-content-center mt-2">
              <div className="links-admin p-0">
                <Link className="link-admin h-100 d-flex justify-content-center" to="/admin/usuarios">
                  {mostrar === "usuarios" && <FontAwesomeIcon icon={faPlay} />}{" "}
                  Usuarios
                  <FontAwesomeIcon icon={faUserTie} className="icon-admin" />
                </Link>
              </div>
            </Col>
            <Col xs={6} className="d-flex justify-content-center mt-2">
              <div className="links-admin p-0">
                <Link className="link-admin h-100 d-flex justify-content-center" to="/admin/productos">
                  {mostrar === "productos" && <FontAwesomeIcon icon={faPlay} />}{" "}
                  Productos
                  <FontAwesomeIcon icon={faBoxOpen} className="icon-admin" />
                </Link>
              </div>
            </Col>
            <Col xs={6} className="d-flex justify-content-center mt-2">
              <div className="links-admin p-0">
                <Link className="link-admin h-100 d-flex justify-content-center" to="/admin/ventas">
                  {mostrar === "ventas" && <FontAwesomeIcon icon={faPlay} />}{" "}
                  Ventas
                  <FontAwesomeIcon icon={faReceipt} className="icon-admin" />
                </Link>
              </div>
            </Col>
            <Col xs={6} className="d-flex justify-content-center mt-2">
              <div className="links-admin p-0">
                <Link className="link-admin h-100 d-flex justify-content-center" to="/admin/proveedores">
                  {mostrar === "proveedores" && (
                    <FontAwesomeIcon icon={faPlay} />
                  )}{" "}
                  Proveedores
                  <FontAwesomeIcon icon={faTruck} className="icon-admin" />
                </Link>
              </div>
            </Col>
            <Col xs={6} className="d-flex justify-content-center  mt-2">
              <div className="links-admin p-0">
                <Link className="link-admin h-100 d-flex justify-content-center" to="/admin/canchas">
                  {mostrar === "canchas" && <FontAwesomeIcon icon={faPlay} />}{" "}
                  Canchas
                  <FontAwesomeIcon icon={faFutbol} className="icon-admin" />
                </Link>
              </div>
            </Col>
            <Col xs={6} className="d-flex justify-content-center mt-2">
              <div className="links-admin p-0">
                <Link className="link-admin h-100 d-flex justify-content-center" to="/admin/horarios">
                  {mostrar === "horarios" && <FontAwesomeIcon icon={faPlay} />}{" "}
                  Horarios
                  <FontAwesomeIcon icon={faClock} className="icon-admin" />
                </Link>
              </div>
            </Col>
            <Col xs={12} className="d-flex justify-content-center w-50 mt-2">
              <div className="links-admin p-0">
                <Link className="link-admin h-100 d-flex justify-content-center" to="/admin/reservas">
                  {mostrar === "reservas" && <FontAwesomeIcon icon={faPlay} />}{" "}
                  Reservas
                  <FontAwesomeIcon
                    icon={faCalendarCheck}
                    className="icon-admin"
                  />
                </Link>
              </div>
            </Col>
          </Row>
        </div>
      )}
    </>
  );
};

export default MainAdmin;
