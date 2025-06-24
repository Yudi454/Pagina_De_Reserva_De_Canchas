import { Col, Row } from "react-bootstrap";
import MainReservas from "./MainReservas";
import NavAdmin from "../NavAdmin";
import { useEffect, useState } from "react";
import {
  deleteDato,
  getDato,
  getDatos,
  updateDato,
} from "../../../customHooks/UseApi";
import { URLRESERVAS } from "../../../routes/Rutas";
import VerDatoAdmin from "../../../components/verDatoAdmin/VerDatoAdmin";
import ReservasEditar from "./ReservasEditar";

const Reservas = () => {
  const [reservas, setReservas] = useState();

  const [reserva, setReserva] = useState();

  const [mostrarVer, setMostrarVer] = useState();

  const [mostrarEditar, setMostrarEditar] = useState();

  useEffect(() => {
    getDatos(URLRESERVAS, setReservas);
  }, []);

  const handleVer = (id) => {
    setMostrarVer(true);
    setMostrarEditar(false);
    getDato(URLRESERVAS, id, setReserva);
  };

  const handleEditar = (id) => {
    setMostrarVer(false);
    setMostrarEditar(true);
    getDato(URLRESERVAS, id, setReserva);
  };

  const handleDelete = (id) => {
    deleteDato(URLRESERVAS, id, setReservas);
  };

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      updateDato(URLRESERVAS, reserva, setReservas);
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
          <MainReservas
            reservas={reservas}
            handleDelete={handleDelete}
            handleVer={handleVer}
            handleEditar={handleEditar}
          />
        </Col>
        {mostrarVer && (
          <Col>
            <VerDatoAdmin dato={reserva} setMostrarVer={setMostrarVer} />
          </Col>
        )}
        {mostrarEditar && (
          <Col>
            <ReservasEditar
              setMostrarEditar={setMostrarEditar}
              reserva={reserva}
              setReserva={setReserva}
              handleSubmit={handleSubmit}
            />
          </Col>
        )}
      </Row>
    </>
  );
};

export default Reservas;
