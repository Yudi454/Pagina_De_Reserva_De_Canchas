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

export const updateDato = async (url, dato, setValor, setOcultar) => {
  try {
    const res = await axios.patch(`${url}/${dato.id}`, {
      ...dato,
    });
    getDatos(url, setValor);
    alert("Cliente actualizado");
  } catch (error) {
    console.log(error);
  }
};

export const deleteDato = async (url, id, setDatos) => {
  try {
    const res = await axios.delete(`${url}/${id}`);
    getDatos(url, setDatos);
    alert("Objeto eliminado");
  } catch (error) {
    console.log(error);
  }
};
