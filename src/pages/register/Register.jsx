import { useState } from "react"
import MainRegister from "./MainRegister"

const Register = () => {

  const [usuario,setUsuario] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(usuario);
    
  }

  return (
    <MainRegister usuario={usuario} setUsuario={setUsuario} handleSubmit={handleSubmit} />
  )
}

export default Register