import MainHome from './MainHome'
import { useStore } from '../../store/AuthStore';

const Home = () => {
  const { color } = useStore();
  
  return (
    <div className={color === 'Claro' ? 'modo-claro' : 'modo-oscuro'}>
      <MainHome />

    </div>
  )
}

export default Home