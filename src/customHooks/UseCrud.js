import { getDato } from "./UseApi";

export const handleVer = (setMostrar,url,id,setValor) => {
    setMostrar(true);
    getDato(url,id,setValor);
  };
  