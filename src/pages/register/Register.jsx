import { useState } from "react";
import MainRegister from "./MainRegister";
import { rutas } from "../../routes/Rutas";
import { register } from "../../customHooks/UseApi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const [usuario, setUsuario] = useState();
  const API_URL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  const onRegisterSubmit = async (data) => {
    try {
      await register(`${API_URL}${rutas.register}`, data);
      navigate("/Login");
    } catch (error) {
      toast.error(error)
    }
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
