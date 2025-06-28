import { useState } from "react";
import MainRegister from "./MainRegister";
import { rutas } from "../../routes/Rutas";
import { register } from "../../customHooks/UseApi";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [usuario, setUsuario] = useState();

  const API_URL = import.meta.env.VITE_API_URL;

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    register(`${API_URL}${rutas.register}`, usuario);
    navigate("/login");
  };

  return (
    <MainRegister
      usuario={usuario}
      setUsuario={setUsuario}
      handleSubmit={handleSubmit}
    />
  );
};

export default Register;
