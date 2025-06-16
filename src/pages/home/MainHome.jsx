import ContactoRedes from "../../components/main/ContactoRedes";
import Main1 from "../../components/main/main1"
import Main2 from "../../components/main/Main2";
import Servicios from "../../components/main/Servicios"
import { useStore } from '../../store/AuthStore';

const MainHome = () => {

  const { color } = useStore();

  return (
    <div className={color === 'Claro' ? 'modo-claro' : 'modo-oscuro'}>
      <Main1/>
      <Main2/>
      <Servicios/>
      <ContactoRedes/>
    </div>
  )
}

export default MainHome