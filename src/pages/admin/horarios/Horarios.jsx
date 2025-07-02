import { Button, Col, Row } from "react-bootstrap";
import MainHorarios from "./MainHorarios";
import NavAdmin from "../NavAdmin";
import { useEffect, useState } from "react";
import {
  createDato,
  deleteDato,
  getDato,
  getDatos,
  updateDato,
} from "../../../customHooks/UseApi";
import { rutas } from "../../../routes/Rutas";
import { toast } from "react-toastify";
import VerDatoAdmin from "../../../components/verDatoAdmin/VerDatoAdmin";
import HorariosEditar from "./HorariosEditar";
import { useForm } from "react-hook-form";
import CreateHorarios from "./CreateHorarios";

const Horarios = () => {
  const [mostrarVer, setMostrarVer] = useState();

  const [mostrarEditar, setMostrarEditar] = useState();

  const [mostrarCrear, setMostrarCrear] = useState();

  const [horario, setHorario] = useState();

  const [horarios, setHorarios] = useState();

  const API_RUTE = import.meta.env.VITE_API_URL;

  const RUTA_HORARIOS = `${API_RUTE}${rutas.horarios}`;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    getDatos(RUTA_HORARIOS, setHorarios);
  }, []);

  const handleVer = (id) => {
    setMostrarVer(true);
    setMostrarEditar(false);
    setMostrarCrear(false);
    getDato(`${RUTA_HORARIOS}/${id}`, setHorario);
  };

  const handleEditar = (id) => {
    setMostrarVer(false);
    setMostrarEditar(true);
    setMostrarCrear(false);
    getDato(`${`${RUTA_HORARIOS}`}/${id}`, setHorario);
  };

  const handleCrear = () => {
    setMostrarVer(false);
    setMostrarEditar(false);
    setMostrarCrear(true);
  };

  const handleCrearHorario = async (data) => {
    try {
      await createDato(`${RUTA_HORARIOS}/create`, data, "horario");
      await getDatos(RUTA_HORARIOS, setHorarios);
      setMostrarCrear(false);
      setHorario("");
      reset();
    } catch (error) {
      MySwal.fire({
        icon: "error",
        title: "¡Error!",
        text: error,
      });
    }
  };

  const handleEditarHorario = async (data) => {
    try {
      await updateDato(
        `${RUTA_HORARIOS}/update/${horario.id_horario}`,
        data,
        "horario"
      );
      await getDatos(RUTA_HORARIOS, setHorarios);
      setMostrarEditar(false);
      setHorario("");
      reset();
    } catch (error) {
      toast.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const eliminado = await deleteDato(`${RUTA_HORARIOS}/delete/${id}`);
      if (eliminado) {
        await getDatos(RUTA_HORARIOS, setHorarios);
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
    <>
      <Row>
        <Col>
          <NavAdmin />
        </Col>
        <Col>
          <Button onClick={() => handleCrear(true)}>Crear</Button>
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
              horario={horario}
              setHorario={setHorario}
              setMostrarEditar={setMostrarEditar}
              handleEditarHorario={handleEditarHorario}
              handleSubmit={handleSubmit}
              register={register}
              errors={errors}
            />
          </Col>
        )}
        {mostrarCrear && (
          <Col>
            <CreateHorarios
              setMostrarCrear={setMostrarCrear}
              horario={horario}
              setHorario={setHorario}
              handleCrearHorario={handleCrearHorario}
              handleSubmit={handleSubmit}
              register={register}
              errors={errors}
            />
          </Col>
        )}
      </Row>
    </>
  );
};

export default Horarios;
