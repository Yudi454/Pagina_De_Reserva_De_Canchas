import MainInfoCancha from './MainInfoCancha'
import { useParams } from "react-router-dom";

const InfoCancha = () => {

const {id} = useParams()

  return (
    <MainInfoCancha id_cancha={id}/>
  )
}

export default InfoCancha
