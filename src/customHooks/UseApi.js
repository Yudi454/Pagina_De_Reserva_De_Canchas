import axios from "axios";

export const getDatos = async (url, setValor) => {
  const res = await axios.get(url);
  setValor(res.data);
};

export const getDato = async (url, id, setValor) => {
  const res = await axios.get(url);
  const data = await res.data.find((cliente) => cliente.id === id);
  setValor(data);
};

export const updateDato = async (url, id, dato, setValor) => {
  try {
    const res = await axios.patch(`${url}/${id}`, {
      ...dato,
    });
    alert("Cliente actualizado");
  } catch (error) {
    console.log(error);
  }
  getDatos(url, setValor);
};
