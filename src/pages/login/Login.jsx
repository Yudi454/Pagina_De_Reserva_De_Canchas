import { useState } from "react";
import MainLogin from "./MainLogin";
import { login } from "../../customHooks/UseApi";
import { rutas } from "../../routes/Rutas";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../store/AuthStore";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

const Login = () => {
  const [usuario, setUsuario] = useState();
  const loadUser = useStore((state) => state.loadUser);
  const API_URL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onLoginSubmit = async (data) => {
    const exito = await login(`${API_URL}${rutas.login}`, data);
    if (exito) {
      loadUser();
      navigate("/");
      reset();
    }
  };

  return (
    <MainLogin
      usuario={usuario}
      setUsuario={setUsuario}
      onLoginSubmit={onLoginSubmit}
      register={register}
      handleSubmit={handleSubmit}
      errors={errors}
    />
  );
};

export default Login;
