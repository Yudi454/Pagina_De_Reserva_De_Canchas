import axios from "axios";

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
  }
};
