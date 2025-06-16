import { FaInstagram, FaFacebook } from 'react-icons/fa';
import "../../css/footer/footer.css"


const MainFooter = () => {

  return (
    <div >
      <br />
      <br />
      <br />
      <footer className="footer">
      <p>&copy; 2025 TuNombre</p>
      <div className="footer-icons">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
      </div>
    </footer>
    </div>
  )
}

export default MainFooter