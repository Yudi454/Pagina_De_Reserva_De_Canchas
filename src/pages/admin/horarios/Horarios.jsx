import { Col, Row } from "react-bootstrap";
import MainHorarios from "./MainHorarios";
import NavAdmin from "../NavAdmin";
import { useEffect, useState } from "react";
import {
  deleteDato,
  getDato,
  getDatos,
  updateDato,
} from "../../../customHooks/UseApi";
import { rutas } from "../../../routes/Rutas";
import { toast } from "react-toastify";
import VerDatoAdmin from "../../../components/verDatoAdmin/VerDatoAdmin";
import HorariosEditar from "./HorariosEditar";

const Horarios = () => {
  const [mostrarVer, setMostrarVer] = useState();

  const [mostrarEditar, setMostrarEditar] = useState();

  const [horario, setHorario] = useState();

  const [horarios, setHorarios] = useState();

  const API_RUTE = import.meta.env.VITE_API_URL;

  const RUTA_HORARIOS = `${API_RUTE}${rutas.horarios}`;

  useEffect(() => {
    getDatos(RUTA_HORARIOS, setHorarios);
  }, []);

  const handleVer = (id) => {
    setMostrarVer(true);
    setMostrarEditar(false);
    getDato(`${RUTA_HORARIOS}/${id}`, setHorario);
  };

  const handleEditar = (id) => {
    setMostrarVer(false);
    setMostrarEditar(true);
    getDato(`${`${RUTA_HORARIOS}`}/${id}`, setHorario);
  };

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      updateDato(`${RUTA_HORARIOS}/update/${horario.id_horario}`, horario, setHorarios);
      getDatos(RUTA_HORARIOS,setHorarios)
      alert("Horario editado");
      setMostrarEditar(false);
    } catch (error) {
      toast.error(error);
    }
  };

  const handleDelete = (id) => {
    deleteDato(`${RUTA_HORARIOS}/delete/${id}`);
    getDatos(RUTA_HORARIOS,setHorarios)
  };

  
  

  return (
    <>
      <Row>
        <Col>
          <NavAdmin />
        </Col>
        <Col>
          <MainHorarios
            horarios={horarios}
            handleVer={handleVer}
            handleEditar={handleEditar}
            handleDelete={handleDelete}
          />
        </Col>
        {mostrarVer && (
          <Col>
            <VerDatoAdmin setMostrarVer={setMostrarVer} dato={horario} />
          </Col>
        )}
        {mostrarEditar && (
          <Col>
            <HorariosEditar
              setMostrarEditar={setMostrarEditar}
              horario={horario}
              handleSubmit={handleSubmit}
              setHorario={setHorario}
            />
          </Col>
        )}
      </Row>
    </>
  );
};

export default Horarios;
