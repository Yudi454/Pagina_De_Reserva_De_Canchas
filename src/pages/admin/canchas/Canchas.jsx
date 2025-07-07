import { Col, Row } from "react-bootstrap";
import MainCanchas from "./MainCanchas";
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
import VerDatoAdmin from "../../../components/verDatoAdmin/VerDatoAdmin";
import CanchasEditar from "./CanchasEditar";
import { useForm } from "react-hook-form";
import CanchasCrear from "./CanchasCrear";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileSignature } from "@fortawesome/free-solid-svg-icons";
import { useStore } from "../../../store/AuthStore";

const Canchas = () => {
  const { color } = useStore();

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
    <div className={color === "Claro" ? "modo-claro" : "modo-oscuro"}>
      <div className="admin-container">
        <Row className="gx-0">
          <Col md={2} className="contenedor-admin-links-pc d-none d-md-block">
            <NavAdmin celular={false} mostrar={"canchas"} />
          </Col>
          <Col xs={12} className="d-bock d-md-none">
            <NavAdmin celular={true} mostrar={"canchas"} />
          </Col>
          {mostrarCrear && (
            <Col md={10}>
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
          {mostrarVer && (
            <Col md={10} className="d-flex justify-content-center">
              <div className="text-center">
                <VerDatoAdmin setMostrarVer={setMostrarVer} dato={cancha} />
              </div>
            </Col>
          )}
          {mostrarEditar && (
            <Col md={10}>
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
          <Col
            md={mostrarCrear || mostrarEditar || mostrarVer ? 12 : 10}
            sm={12}
            className="text-center d-md-flex flex-column align-items-center justify-content-between"
          >
            {!mostrarCrear && (
              <div className="mt-3 mb-3">
                <button className="admin-button" onClick={handleCrear}>
                  Crear Cancha
                  <FontAwesomeIcon
                    icon={faFileSignature}
                    className="icon-admin"
                  />
                </button>
              </div>
            )}
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
        </Row>
      </div>
    </div>
  );
};

export default Canchas;
