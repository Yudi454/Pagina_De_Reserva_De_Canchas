import { useState } from "react";
import MainLogin from "./MainLogin";
import { login } from "../../customHooks/UseApi";
import { rutas } from "../../routes/Rutas";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../store/AuthStore";

const Login = () => {
  const [usuario, setUsuario] = useState();

  const loadUser = useStore((state) => state.loadUser)

  const API_URL = import.meta.env.VITE_API_URL;

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(`${API_URL}${rutas.login}`, usuario);
    loadUser()    
    navigate("/")
  };
  
  return (
    <MainLogin
      usuario={usuario}
      setUsuario={setUsuario}
      handleSubmit={handleSubmit}
    />
  );
};

export default Login;
