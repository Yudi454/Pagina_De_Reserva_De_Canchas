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
import { URLCANCHAS } from "../../../routes/Rutas";
import VerDatoAdmin from "../../../components/verDatoAdmin/VerDatoAdmin";
import CanchasEditar from "./CanchasEditar";

const Canchas = () => {
  const [canchas, setCanchas] = useState();

  const [cancha, setCancha] = useState();

  const [mostrarVer, setMostrarVer] = useState();

  const [mostrarEditar, setMostrarEditar] = useState();

  useEffect(() => {
    getDatos(URLCANCHAS, setCanchas);
  }, []);

  const handleVer = (id) => {
    setMostrarVer(true);
    setMostrarEditar(false);
    getDato(URLCANCHAS, id, setCancha);
  };

  const handleEditar = (id) => {
    setMostrarVer(false);
    setMostrarEditar(true);
    getDato(URLCANCHAS, id, setCancha);
  };

  const handleDelete = (id) => {
    deleteDato(URLCANCHAS, id, setCanchas);
  };

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      updateDato(URLCANCHAS, cancha, setCanchas);
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
