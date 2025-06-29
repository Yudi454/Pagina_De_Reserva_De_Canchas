import axios from "axios";
import { toast } from "react-toastify";

export const getDatos = async (url, setValor) => {
  const res = await axios.get(url);
  setValor(res.data);
};

export const getDato = async (url, setValor) => {
  const res = await axios.get(url);
  setValor(res.data);
};

export const updateDato = async (url, dato) => {
  try {
    const res = await axios.patch(url, {
      ...dato,
    });

export const createDato = async (url, dato) => {
  try {
    const res = await axios.post(url, dato);
    alert(res.data.message);
  } catch (error) {
    console.log(error);
  }
};

export const register = async (url, usuario) => {
  try {
    const res = await axios.post(url, usuario);
    toast.success(`${res.data.message}`);

  } catch (error) {
    console.log(error);
  }
};

export const deleteDato = async (url) => {
  try {
    const res = await axios.delete(url);
    alert("Objeto eliminado");
  } catch (error) {
    console.log(error);
export const login = async (url, usuario) => {
  try {
    const res = await axios.post(url, usuario);
    toast.success(`${res.data.message}`);
    localStorage.setItem("usuario", JSON.stringify(res.data.results));
  } catch (error) {
    toast.error(error);
  }
};
