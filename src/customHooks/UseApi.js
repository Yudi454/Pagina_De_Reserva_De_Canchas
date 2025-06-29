import axios from "axios";
import { toast } from "react-toastify";

// Obtener muchos datos
export const getDatos = async (url, setValor) => {
  try {
    const res = await axios.get(url);
    setValor(res.data);
  } catch (error) {
    console.error(error);
  }
};

// Obtener un solo dato
export const getDato = async (url, setValor) => {
  try {
    const res = await axios.get(url);
    setValor(res.data);
  } catch (error) {
    console.error(error);
  }
};

// Actualizar dato
export const updateDato = async (url, dato) => {
  try {
    const res = await axios.patch(url, {
      ...dato,
    });
    toast.success(res.data.message || "Actualizado con éxito");
  } catch (error) {
    console.error(error);
    toast.error("Error al actualizar");
  }
};

// Crear dato
export const createDato = async (url, dato) => {
  try {
    const res = await axios.post(url, dato);
    alert(res.data.message);
  } catch (error) {
    console.log(error);
    alert("Error al crear dato");
  }
};

// Registro de usuario
export const register = async (url, usuario) => {
  try {
    const res = await axios.post(url, usuario);
    toast.success(`${res.data.message}`);
  } catch (error) {
    console.log(error);
    toast.error("Error al registrarse");
  }
};

// Eliminar dato
export const deleteDato = async (url) => {
  try {
    const res = await axios.delete(url);
    alert("Objeto eliminado");
  } catch (error) {
    console.log(error);
    alert("Error al eliminar");
  }
};

// Login
export const login = async (url, usuario) => {
  try {
    const res = await axios.post(url, usuario);
    toast.success(`${res.data.message}`);
    localStorage.setItem("usuario", JSON.stringify(res.data.results));
  } catch (error) {
    toast.error("Error en login");
    console.log(error);
  }
};
