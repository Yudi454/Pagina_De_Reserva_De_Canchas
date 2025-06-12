import axios from "axios";

  export const getDatos = async (url) => {
    const res = await axios.get(url);
    console.log(res.data);
  };