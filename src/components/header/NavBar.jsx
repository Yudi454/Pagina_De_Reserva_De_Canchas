import { useStore } from '../../store/AuthStore';
import '../../css/modo_claro/ModoClaro.css';
import '../../css/modo_oscuro/ModoOscuro.css';


const NavBar = () => {

  const { color, changeColor } = useStore();


  return (
    <div className={color === 'Claro' ? 'modo-claro' : 'modo-oscuro'}>
      {/* Contenido de tu NavBar */}
      <p>Este es el contenido de la NavBar. Modo actual: {color}</p>
      <button onClick={() => changeColor(color === 'Claro' ? 'Oscuro' : 'Claro')}>
        Cambiar a {color === 'Claro' ? 'Modo Oscuro' : 'Modo Claro'}
      </button>
    </div>
  )
}

export default NavBar