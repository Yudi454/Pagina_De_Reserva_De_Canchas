import { FaInstagram, FaFacebook } from 'react-icons/fa';
import { useStore } from '../../store/AuthStore';
import "../../css/footer/footer.css"


const MainFooter = () => {

  const { color } = useStore();

  return (
    <div className={color === 'Claro' ? 'modo-claro' : 'modo-oscuro'}>
      <br />
      <br />
      <br />
      <div className="footer">
        <img src="./icono.png" alt="Logo" className="logo-img" />
      <p>&copy; 2025 Mis Canchas</p>
      <div className="footer-icons">
        <a href="https://instagram.com" ><FaInstagram /></a>
        <a href="https://facebook.com" ><FaFacebook /></a>
      </div>
    </div>
    </div>
  )
}

export default MainFooter