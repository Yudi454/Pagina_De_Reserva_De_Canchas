import { Button, Col, Row } from "react-bootstrap";
import MainUsuarios from "./MainUsuarios";
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
import UsuariosEditar from "./UsuariosEditar";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import CreateUsuarios from "./CreateUsuarios";
import { useForm } from "react-hook-form";
const MySwal = withReactContent(Swal);

const Usuarios = () => {
  const [usuarios, setUsuarios] = useState();

  const [usuario, setUsuario] = useState();

  const [mostrarVer, setMostrarVer] = useState(false);

  const [mostrarEditar, setMostrarEditar] = useState(false);

  const [mostrarCrear, setMostrarCrear] = useState(false);

  const API_ROUTE = import.meta.env.VITE_API_URL;

  const RUTA_USUARIOS = `${API_ROUTE}${rutas.usuarios}`;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  //Traen usuarios
  useEffect(() => {
    getDatos(RUTA_USUARIOS, setUsuarios);
  }, []);

  //Muestra Ver
  const handleVer = (id) => {
    getDato(`${RUTA_USUARIOS}/${id}`, setUsuario);
    setMostrarVer(true);
    setMostrarEditar(false);
    setMostrarCrear(false);
  };

  //Muestra editar
  const handleEditar = (id) => {
    getDato(`${RUTA_USUARIOS}/${id}`, setUsuario);
    setMostrarVer(false);
    setMostrarEditar(true);
    setMostrarCrear(false);
  };

  //Muestra crear
  const handleCrear = () => {
    setMostrarVer(false);
    setMostrarEditar(false);
    setMostrarCrear(true);
  };

  //Logica de crear
  const handleCrearUsuario = async () => {
    try {
      await createDato(`${RUTA_USUARIOS}/create`, usuario, "usuario");
      await getDatos(RUTA_USUARIOS, setUsuarios);
      setMostrarCrear(false);
      setUsuario("");
      reset();
    } catch (error) {
      MySwal.fire({
        icon: "error",
        title: "¡Error!",
        text: error,
      });
    }
  };

  //Logica de eliminar
  const handleDelete = async (id) => {
    try {
      const eliminado = await deleteDato(
        `${RUTA_USUARIOS}/delete/${id}`,
        "usuario"
      );
      if (eliminado) {
        getDatos(RUTA_USUARIOS, setUsuarios);
      }
    } catch (error) {
      MySwal.fire({
        icon: "error",
        title: "¡Error!",
        text: error,
      });
    }
  };

  //Logica de editar
  const handleEditarUsuario = (e) => {
    try {
      updateDato(`${RUTA_USUARIOS}/update/${usuario.id_usuario}`, usuario),
        "usuario";
      getDatos(RUTA_USUARIOS, setUsuarios);
      setMostrarEditar(false);
      setUsuario("");
      reset();
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
          <Button onClick={handleCrear}>Crear</Button>
          <MainUsuarios
            usuarios={usuarios}
            handleVer={handleVer}
            handleEditar={handleEditar}
            handleDelete={handleDelete}
          />
        </Col>
        {mostrarVer && (
          <Col>
            <VerDatoAdmin setMostrarVer={setMostrarVer} dato={usuario} />
          </Col>
        )}
        {mostrarEditar && (
          <Col>
            <UsuariosEditar
              usuario={usuario}
              setUsuario={setUsuario}
              handleEditarUsuario={handleEditarUsuario}
              setMostrarEditar={setMostrarEditar}
              handleSubmit={handleSubmit}
              register={register}
              errors={errors}
            />
          </Col>
        )}
        {mostrarCrear && (
          <Col>
            <CreateUsuarios
              setMostrarCrear={setMostrarCrear}
              usuario={usuario}
              setUsuario={setUsuario}
              handleCrearUsuario={handleCrearUsuario}
              register={register}
              handleSubmit={handleSubmit}
              errors={errors}
            />
          </Col>
        )}
      </Row>
    </>
  );
};

export default Usuarios;
