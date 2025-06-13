import { getDato } from "./UseApi";

export const handleVer = (setMostrar,url,id,setValor,setOcultar) => {
    setMostrar(true);
    setOcultar(false);
    getDato(url,id,setValor);
  };
  
export const handleEditar = (setMostrar,url,id,setValor,setOcultar) =>{
  setMostrar(true);
  setOcultar(false);
  getDato(url,id,setValor);
}