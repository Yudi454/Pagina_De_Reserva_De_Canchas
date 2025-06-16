import Main1 from "../../components/main/main1"
import { useStore } from '../../store/AuthStore';

const MainHome = () => {

  const { color } = useStore();

  return (
    <div className={color === 'Claro' ? 'modo-claro' : 'modo-oscuro'}>
      <Main1/>
    </div>
  )
}

export default MainHome