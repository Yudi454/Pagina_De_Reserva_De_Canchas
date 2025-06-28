import { useState } from "react";
import MainLogin from "./MainLogin";
import { login } from "../../customHooks/UseApi";
import { rutas } from "../../routes/Rutas";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [usuario, setUsuario] = useState();

  const API_URL = import.meta.env.VITE_API_URL;

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    login(`${API_URL}${rutas.login}`, usuario);
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
