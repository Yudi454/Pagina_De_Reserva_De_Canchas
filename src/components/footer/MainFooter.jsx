import { FaInstagram, FaFacebook } from 'react-icons/fa';
import { useStore } from '../../store/AuthStore';
import "../../css/footer/footer.css";

const MainFooter = () => {
  const { color } = useStore();

  return (
      <div className={color === 'Claro' ? 'modo-claro' : 'modo-oscuro'}>
        <div className='footer-container'>
          <div className="footer-content">
        <img src="/icono.png" alt="Logo" className="footer-logo" />
        <p className="footer-text">&copy; 2025 Mis Canchas</p>
        <div className="footer-icons">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
        </div>
      </div>
        </div>
      </div>
  );
};

export default MainFooter;
