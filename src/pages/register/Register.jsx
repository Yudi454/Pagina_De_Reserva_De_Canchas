import { useState } from "react";
import MainRegister from "./MainRegister";
import { rutas } from "../../routes/Rutas";
import { register } from "../../customHooks/UseApi";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [usuario, setUsuario] = useState();
  const API_URL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  const onRegisterSubmit = async (data) => {
    await register(`${API_URL}${rutas.register}`, data);
    navigate("/Login");
  };

  return (
    <MainRegister
      usuario={usuario}
      setUsuario={setUsuario}
      onRegisterSubmit={onRegisterSubmit}
    />
  );
};

export default Register;
