import { Button, Col, Row } from "react-bootstrap";
import MainReservas from "./MainReservas";
import NavAdmin from "../NavAdmin";
import { useEffect, useState } from "react";
import {
  buscarDato,
  createDato,
  deleteDato,
  getDato,
  getDatos,
  updateDato,
} from "../../../customHooks/UseApi";
import { rutas } from "../../../routes/Rutas";
import VerDatoAdmin from "../../../components/verDatoAdmin/VerDatoAdmin";
import ReservasEditar from "./ReservasEditar";
import { useForm } from "react-hook-form";
import ReservasCrear from "./ReservasCrear";
import { toast } from "react-toastify";
import { faFileSignature } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useStore } from "../../../store/AuthStore";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
const MySwal = withReactContent(Swal);

const Reservas = () => {
  const { color } = useStore();

  const [reservas, setReservas] = useState();

  const [reserva, setReserva] = useState();

  const [horario, setHorario] = useState();

  const [horarios, setHorarios] = useState();

  const [mostrarVer, setMostrarVer] = useState();

  const [mostrarEditar, setMostrarEditar] = useState();

  const [mostrarCrear, setMostrarCrear] = useState();

  const API_RUTE = import.meta.env.VITE_API_URL;

  const RUTA_RESERVAS = `${API_RUTE}${rutas.reservas}`;

  const RUTA_HORARIOS = `${API_RUTE}${rutas.horarios}`;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    getDatos(RUTA_RESERVAS, setReservas);
  }, []);

  const handleVer = (id) => {
    setMostrarVer(true);
    setMostrarEditar(false);
    setMostrarCrear(false);
    getDato(`${RUTA_RESERVAS}/${id}`, setReserva);
  };

  const handleEditar = (id) => {
    setMostrarVer(false);
    setMostrarEditar(true);
    setMostrarCrear(false);
    getDato(`${RUTA_RESERVAS}/${id}`, setReserva);
  };

  const handleCrear = () => {
    setMostrarVer(false);
    setMostrarEditar(false);
    setMostrarCrear(true);
    reset();
  };

  const buscarHorarios = async () => {
    if (reserva && reserva.fecha_reserva) {
      try {
        await buscarDato(
          `${RUTA_HORARIOS}/horarios-disponibles`,
          {
            dia: reserva.fecha_reserva,
          },
          setHorarios
        );
        toast.success("Se trajeron horarios");
      } catch (error) {
        MySwal.fire({
          icon: "error",
          title: "¡Error!",
          text: error,
        });
      }
    } else {
      toast.error("Ingrese una fecha antes de buscar una reserva");
    }
  };

  const handleCrearReserva = async () => {
    try {
      await createDato(`${RUTA_RESERVAS}/create`, reserva, "reserva");
      await getDatos(RUTA_RESERVAS, setReservas);
      setMostrarCrear(false);
      setReserva("");
      reset();
    } catch (error) {
      MySwal.fire({
        icon: "error",
        title: "¡Error!",
        text: error,
      });
    }
  };

  const handleEditarReserva = async () => {
    try {
      await updateDato(
        `${RUTA_RESERVAS}/update/${reserva.id_reserva}`,
        reserva,
        "reserva"
      );
      await getDatos(RUTA_RESERVAS, setReservas);
      setMostrarEditar(false);
      setReserva("");
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
      const eliminado = await deleteDato(
        `${RUTA_RESERVAS}/delete/${id}`,
        "reserva"
      );
      if (eliminado) {
        await getDatos(RUTA_RESERVAS, setReservas);
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
            <NavAdmin celular={false} mostrar={"reservas"} />
          </Col>
          <Col xs={12} className="d-bock d-md-none">
            <NavAdmin celular={true} mostrar={"reservas"} />
          </Col>
          {mostrarCrear && (
            <Col md={10}>
              <ReservasCrear
                reserva={reserva}
                horarios={horarios}
                setReserva={setReserva}
                setMostrarCrear={setMostrarCrear}
                handleCrearReserva={handleCrearReserva}
                buscarHorarios={buscarHorarios}
                handleSubmit={handleSubmit}
                register={register}
                errors={errors}
              />
            </Col>
          )}
          {mostrarVer && (
            <Col md={10} className="d-flex justify-content-center">
              <div className="text-center">
                <VerDatoAdmin dato={reserva} setMostrarVer={setMostrarVer} />
              </div>
            </Col>
          )}
          {mostrarEditar && (
            <Col md={10}>
              <ReservasEditar
                reserva={reserva}
                horarios={horarios}
                setReserva={setReserva}
                setMostrarEditar={setMostrarEditar}
                handleEditarReserva={handleEditarReserva}
                buscarHorarios={buscarHorarios}
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
                  Crear reserva{" "}
                  <FontAwesomeIcon
                    icon={faFileSignature}
                    className="icon-admin"
                  />
                </button>
              </div>
            )}
            {reservas && reservas.length > 0 ? (
              <MainReservas
                reservas={reservas}
                handleDelete={handleDelete}
                handleVer={handleVer}
                handleEditar={handleEditar}
              />
            ) : (
              <p>No hay reservas</p>
            )}
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Reservas;
