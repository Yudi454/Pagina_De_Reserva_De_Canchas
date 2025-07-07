import { useState } from "react";
import MainRegister from "./MainRegister";
import { rutas } from "../../routes/Rutas";
import { register } from "../../customHooks/UseApi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

const Register = () => {
  const [usuario, setUsuario] = useState();
  const API_URL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  const {
    register: registerInput,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onRegisterSubmit = async (data) => {
    try {
      const exito = await register(`${API_URL}${rutas.register}`, data);
      await console.log(exito);

      if (exito) {
        navigate("/Login");
        reset();
      }
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <MainRegister
      usuario={usuario}
      setUsuario={setUsuario}
      onRegisterSubmit={onRegisterSubmit}
      register={registerInput}
      handleSubmit={handleSubmit}
      errors={errors}
    />
  );
};

export default Register;
