import { Col, Row } from "react-bootstrap";
import MainCanchas from "./MainCanchas";
import NavAdmin from "../NavAdmin";
import { useEffect, useState } from "react";
import {
  deleteDato,
  getDato,
  getDatos,
  updateDato,
} from "../../../customHooks/UseApi";
import { rutas, URLCANCHAS } from "../../../routes/Rutas";
import VerDatoAdmin from "../../../components/verDatoAdmin/VerDatoAdmin";
import CanchasEditar from "./CanchasEditar";

const Canchas = () => {
  const [canchas, setCanchas] = useState();

  const [cancha, setCancha] = useState();

  const [mostrarVer, setMostrarVer] = useState();

  const [mostrarEditar, setMostrarEditar] = useState();

  const API_ROUTE = import.meta.env.VITE_API_URL;

  const RUTA_CANCHAS = `${API_ROUTE}${rutas.canchas}`;

  useEffect(() => {
    getDatos(RUTA_CANCHAS, setCanchas);
  }, []);

  const handleVer = (id) => {
    setMostrarVer(true);
    setMostrarEditar(false);
    getDato(`${RUTA_CANCHAS}/${id}`, setCancha);
  };

  const handleEditar = (id) => {
    setMostrarVer(false);
    setMostrarEditar(true);
    getDato(`${RUTA_CANCHAS}/${id}`, setCancha);
  };

  const handleDelete = (id) => {
    deleteDato(`${RUTA_CANCHAS}/delete/${id}`);
    getDatos(RUTA_CANCHAS,setCanchas)
  };

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      updateDato(`${RUTA_CANCHAS},/update/${cancha.id}`, cancha);
      alert("Cancha actualizada con exito")
      getDatos(RUTA_CANCHAS,setCanchas)
      setMostrarEditar(false);
    } catch (error) {
      console.log(error);
    }
  };  

  return (
    <>
      <Row>
        <Col>
          <NavAdmin />
        </Col>
        <Col>
          <MainCanchas
            canchas={canchas}
            handleEditar={handleEditar}
            handleDelete={handleDelete}
            handleVer={handleVer}
          />
        </Col>
        {mostrarVer && (
          <Col>
            <VerDatoAdmin setMostrarVer={setMostrarVer} dato={cancha} />
          </Col>
        )}
        {mostrarEditar && (
          <Col>
            <CanchasEditar
              setMostrarEditar={setMostrarEditar}
              cancha={cancha}
              setCancha={setCancha}
              handleSubmit={handleSubmit}
            />
          </Col>
        )}
      </Row>
    </>
  );
};

export default Canchas;
