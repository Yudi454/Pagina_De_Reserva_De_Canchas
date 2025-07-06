import "../../css/error404/Error404.css"
import { Link } from "react-router-dom";

const MainError404 = () => {
  return (
    <div className="container-error">
      <h2 className="title-error">404</h2>
      <p className="message-error">¡Ups! Parece que te has perdido.</p>
      <p className="description-error">
        La página que estás buscando no existe.
      </p>
      <Link className="link-error" to="/">
        Volver a la pagina principal
      </Link>
    </div>
  )
}

export default MainError404