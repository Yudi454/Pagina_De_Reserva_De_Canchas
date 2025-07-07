import { Col, Row } from "react-bootstrap";
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileSignature } from "@fortawesome/free-solid-svg-icons";
import { useStore } from "../../../store/AuthStore";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

const Horarios = () => {
  const { color } = useStore();

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
    <div className={color === "Claro" ? "modo-claro" : "modo-oscuro"}>
      <div className="admin-container">
        <Row className="gx-0">
          <Col md={2} className="contenedor-admin-links-pc d-none d-md-block">
            <NavAdmin celular={false} mostrar={"horarios"} />
          </Col>
          <Col xs={12} className="d-bock d-md-none">
            <NavAdmin celular={true} mostrar={"horarios"} />
          </Col>
          {mostrarCrear && (
            <Col md={10}>
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
          {mostrarVer && (
            <Col md={10} className="d-flex justify-content-center">
              <div className="text-center">
                <VerDatoAdmin setMostrarVer={setMostrarVer} dato={horario} />
              </div>
            </Col>
          )}
          {mostrarEditar && (
            <Col md={10}>
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
          <Col
            md={mostrarCrear || mostrarEditar || mostrarVer ? 12 : 10}
            sm={12}
            className="text-center d-md-flex flex-column align-items-center justify-content-between"
          >
            {!mostrarCrear && (
              <div className="mt-3 mb-3">
                <button className="admin-button" onClick={handleCrear}>
                  Crear horario
                  <FontAwesomeIcon
                    icon={faFileSignature}
                    className="icon-admin"
                  />
                </button>
              </div>
            )}
            {horarios && horarios.length > 0 ? (
              <MainHorarios
                horarios={horarios}
                handleVer={handleVer}
                handleEditar={handleEditar}
                handleDelete={handleDelete}
              />
            ) : (
              <p>No hay Horarios</p>
            )}
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Horarios;
