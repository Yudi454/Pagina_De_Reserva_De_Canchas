import axios from "axios";

  export const getDatos = async (url,setValor) => {
    const res = await axios.get(url);
    setValor(res.data)
  };

  export const getDato = async (url,id,setValor) => {
    const res = await axios.get(url)
    const data = await res.data.find(cliente => cliente.id === id)
    setValor(data)
  }