import axios from "axios";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

// Obtener muchos datos
export const getDatos = async (url, setValor) => {
  try {
    const res = await axios.get(url);
    setValor(res.data);
  } catch (error) {
    MySwal.fire({
      icon: "error",
      title: "¡Error!",
      text: error.response.data.message,
    });
  }
};

// Obtener un solo dato
export const getDato = async (url, setValor) => {
  console.log(url);
  
  try {
    const res = await axios.get(url);
    setValor(res.data.results);
    console.log(res);
    
  } catch (error) {
    MySwal.fire({
      icon: "error",
      title: "¡Error!",
      text: error.response.data.message,
    });
  }
};

export const buscarDato = async (url, dato, setDato) => {
  try {
    const res = await axios.post(url, dato);
    setDato(res.data);
  } catch (error) {
    MySwal.fire({
      icon: "error",
      title: "¡Error!",
      text: error.response.data.message,
    });
  }
};

// Actualizar dato
export const updateDato = async (url, dato, tipo) => {
  try {
    const res = await axios.patch(url, {
      ...dato,
    });
    MySwal.fire({
      icon: "success",
      title: "¡Actualizado!",
      text: `El ${tipo} ha sido actualizado con éxito`,
    });
  } catch (error) {
    MySwal.fire({
      icon: "error",
      title: "¡Error!",
      text: error.response.data.message,
    });
  }
};

// Crear dato
export const createDato = async (url, dato, tipo) => {
  console.log(dato);
  try {
    const res = await axios.post(url, dato);
    
    MySwal.fire({
      icon: "success",
      title: "¡Creado!",
      text: `El ${tipo} ha sido creado con éxito`,
    });
  } catch (error) {
    MySwal.fire({
      icon: "error",
      title: "¡Error!",
      text: error.response.data.message,
    });
  }
};

// Eliminar dato
export const deleteDato = (url, tipo) => {
  return MySwal.fire({
    title: `¿Estás seguro de eliminar este ${tipo}?`,
    text: "Esta acción no se puede deshacer.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Sí, eliminar",
    cancelButtonText: "Cancelar",
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        const res = await axios.delete(url);
        MySwal.fire({
          icon: "success",
          title: "¡Eliminado!",
          text: `El ${tipo} ha sido eliminado con éxito`,
        });
        return true;
      } catch (error) {
        MySwal.fire({
          icon: "error",
          title: "¡Error!",
          text: error,
        });
      }
    }
  });
};

// Registro de usuario
export const register = async (url, usuario) => {
  try {
    const res = await axios.post(url, usuario);
    toast.success(`${res.data.message}`);
  } catch (error) {
    toast.error(error);
  }
};

// Login
export const login = async (url, usuario) => {
  try {
    const res = await axios.post(url, usuario);
    toast.success(`${res.data.message}`);
    console.log(res.data);

    localStorage.setItem("usuario", JSON.stringify(res.data.results));
  } catch (error) {
    toast.error(error);
  }
};

// desloguear

export const logout = () => {
  localStorage.removeItem("usuario");
  toast.success("Sesión cerrada correctamente");
};
