import axios from "axios";
import { toast } from "react-toastify";

export const createDato = async (url, dato) => {
  try {
    const res = await axios.post(url, dato);
    alert(res.data.message)
  } catch (error) {
    console.log(error);
  }
};

export const register = async (url, usuario) => {
  try {
    const res = await axios.post(url, usuario);
    toast.success(`${res.data.message}`)
  } catch (error) {
    console.log(error);
  }
};