import { Button, Col, Row } from "react-bootstrap";
import MainCanchas from "./MainCanchas";
import NavAdmin from "../../pages/admin/NavAdmin";
import { useEffect, useState } from "react";
import {
  createDato,
  deleteDato,
  getDato,
  getDatos,
  updateDato,
} from "../../customHooks/UseApi";
import { rutas } from "../../routes/Rutas";
import VerDatoAdmin from "../../components/verDatoAdmin/VerDatoAdmin";
import CanchasEditar from "./CanchasEditar";
import { useForm } from "react-hook-form";
import CanchasCrear from "./CanchasCrear";

const Canchas = () => {
  const [canchas, setCanchas] = useState();

  const [cancha, setCancha] = useState();

  const [mostrarVer, setMostrarVer] = useState();

  const [mostrarEditar, setMostrarEditar] = useState();

  const [mostrarCrear, setMostrarCrear] = useState();

  const API_ROUTE = import.meta.env.VITE_API_URL;

  const RUTA_CANCHAS = `${API_ROUTE}${rutas.canchas}`;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    getDatos(RUTA_CANCHAS, setCanchas);
  }, []);

  const handleVer = (id) => {
    setMostrarVer(true);
    setMostrarEditar(false);
    setMostrarCrear(false);
    getDato(`${RUTA_CANCHAS}/${id}`, setCancha);
  };

  const handleEditar = (id) => {
    setMostrarVer(false);
    setMostrarEditar(true);
    setMostrarCrear(false);
    getDato(`${RUTA_CANCHAS}/${id}`, setCancha);
  };

  const handleCrear = () => {
    setMostrarVer(false);
    setMostrarEditar(false);
    setMostrarCrear(true);
  };

  const handleCrearCancha = async (data) => {
    try {
      await createDato(`${RUTA_CANCHAS}/create`, data, "cancha");
      await getDatos(RUTA_CANCHAS, setCanchas);
      setMostrarCrear(false);
      setCancha("");
      reset();
    } catch (error) {
      MySwal.fire({
        icon: "error",
        title: "¡Error!",
        text: error,
      });
    }
  };

  const handleEditarCancha = async (data) => {
    try {
      await updateDato(
        `${RUTA_CANCHAS}/update/${cancha.id_cancha}`,
        data,
        "cancha"
      );
      await getDatos(RUTA_CANCHAS, setCanchas);
      setMostrarEditar(false);
      setCancha("");
      reset();
    } catch (error) {
      MySwal.fire({
        icon: "error",
        title: "¡Error!",
        text: error,
      });
    }
  };

  const handleDelete = async (id) => {
    try {
      const eliminado = await deleteDato(`${RUTA_CANCHAS}/delete/${id}`);
      if (eliminado) {
        await getDatos(RUTA_CANCHAS, setCanchas);
      }
    } catch (error) {
      MySwal.fire({
        icon: "error",
        title: "¡Error!",
        text: error,
      });
    }
  };

  return (
    <div style={{paddingTop: "20vh"}}>
      <Row>
        <Col>
          <NavAdmin />
        </Col>
        <Col>
          {!mostrarCrear && <Button onClick={handleCrear}>Crear</Button>}
          {canchas && canchas.length > 0 ? (
            <MainCanchas
              canchas={canchas}
              handleEditar={handleEditar}
              handleDelete={handleDelete}
              handleVer={handleVer}
            />
          ) : (
            <p>No hay canchas</p>
          )}
        </Col>
        {mostrarVer && (
          <Col>
            <VerDatoAdmin setMostrarVer={setMostrarVer} dato={cancha} />
          </Col>
        )}
        {mostrarEditar && (
          <Col>
            <CanchasEditar
              cancha={cancha}
              setCancha={setCancha}
              setMostrarEditar={setMostrarEditar}
              handleEditarCancha={handleEditarCancha}
              handleSubmit={handleSubmit}
              register={register}
              errors={errors}
            />
          </Col>
        )}
        {mostrarCrear && (
          <Col>
            <CanchasCrear
              setMostrarCrear={setMostrarCrear}
              cancha={cancha}
              setCancha={setCancha}
              handleCrearCancha={handleCrearCancha}
              handleSubmit={handleSubmit}
              register={register}
              errors={errors}
            />
          </Col>
        )}
      </Row>
    </div>
  );
};

export default Canchas;
