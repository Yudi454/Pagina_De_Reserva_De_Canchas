import { FaInstagram, FaFacebook } from "react-icons/fa";
import { useStore } from "../../store/AuthStore";
import "../../css/footer/footer.css";
import { Link } from "react-router-dom";

const MainFooter = () => {
  const { color } = useStore();

  return (
    <div className={color === "Claro" ? "modo-claro" : "modo-oscuro"}>
      <div className="fo-container">
        <div className="footer-container">
          <div className="footer-content">
            <img src="/icono.png" alt="Logo" className="footer-logo" />
            <p className="footer-text">
              Copyright Mis Canchas - 2025. Todos los derechos reservados.
              Defensa de las y los consumidores.
            </p>
            <div className="footer-icons">
              <Link to="*" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </Link>
              <Link to="*" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainFooter;
