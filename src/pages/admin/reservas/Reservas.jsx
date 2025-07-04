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
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

const Reservas = () => {
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

  console.log(reserva);
  

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
    <div style={{paddingTop: "20vh"}}>
      <Row>
        <Col>
          <NavAdmin />
        </Col>
        <Col>
          {!mostrarCrear && (
            <Button onClick={handleCrear}>Crear reserva</Button>
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
        {mostrarVer && (
          <Col>
            <VerDatoAdmin dato={reserva} setMostrarVer={setMostrarVer} />
          </Col>
        )}
        {mostrarEditar && (
          <Col>
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
        {mostrarCrear && (
          <Col>
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
      </Row>
    </div>
  );
};

export default Reservas;
