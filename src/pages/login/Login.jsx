import { useState } from "react";
import MainLogin from "./MainLogin";
import { login } from "../../customHooks/UseApi";
import { rutas } from "../../routes/Rutas";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../store/AuthStore";

const Login = () => {
  const [usuario, setUsuario] = useState();
  const loadUser = useStore((state) => state.loadUser);
  const API_URL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  
  const onLoginSubmit = async (data) => {
    await login(`${API_URL}${rutas.login}`, data);
    console.log( login);
    
    loadUser();
    navigate("/Main1");
  };

  return (
    <MainLogin
      usuario={usuario}
      setUsuario={setUsuario}
      onLoginSubmit={onLoginSubmit}
    />
  );
};

export default Login;
