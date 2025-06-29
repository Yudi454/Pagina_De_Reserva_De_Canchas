import axios from "axios";
import { toast } from "react-toastify";

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
