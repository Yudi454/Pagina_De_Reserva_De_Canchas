import { Col, Row } from "react-bootstrap";
import MainClientes from "./MainClientes";
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
import ClientesEditar from "./ClientesEditar";
import CreateClientes from "./CreateClientes";
import { useForm } from "react-hook-form";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileSignature } from "@fortawesome/free-solid-svg-icons";
import { useStore } from "../../../store/AuthStore";
import Usuarios from "../usuarios/Usuarios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

const Clientes = () => {
  const { color } = useStore();

  const [clientes, setClientes] = useState();

  const [cliente, setCliente] = useState();

  const [mostrarVer, setMostrarVer] = useState(false);

  const [mostrarEditar, setMostrarEditar] = useState(false);

  const [mostrarCreate, setMostrarCreate] = useState(false);

  const API_ROUTE = import.meta.env.VITE_API_URL;

  const RUTA_CLIENTES = `${API_ROUTE}${rutas.clientes}`;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    getDatos(RUTA_CLIENTES, setClientes);
  }, []);

  const handleVer = (id) => {
    setMostrarVer(true);
    setMostrarEditar(false);
    setMostrarCreate(false);
    getDato(`${RUTA_CLIENTES}/${id}`, setCliente);
  };

  const handleEditar = (id) => {
    setMostrarVer(false);
    setMostrarEditar(true);
    setMostrarCreate(false);
    getDato(`${RUTA_CLIENTES}/${id}`, setCliente);
  };

  const handleCreate = () => {
    setMostrarVer(false);
    setMostrarEditar(false);
    setMostrarCreate(true);
    reset();
  };

  const handleCreateCliente = async (data) => {
    try {
      await createDato(`${RUTA_CLIENTES}/create`, data, "cliente");
      await getDatos(RUTA_CLIENTES, setClientes);
      setMostrarCreate(false);
      setCliente("");
      reset();
    } catch (error) {
      MySwal.fire({
        icon: "error",
        title: "¡Error!",
        text: error,
      });
    }
  };

  const handleEditarCliente = async (data) => {
    try {
      await updateDato(
        `${RUTA_CLIENTES}/update/${cliente.id_cliente}`,
        data,
        "cliente"
      );
      await getDatos(RUTA_CLIENTES, setClientes);
      setMostrarEditar(false);
      setCliente("");
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
        `${RUTA_CLIENTES}/delete/${id}`,
        "cliente"
      );
      if (eliminado) {
        await getDatos(RUTA_CLIENTES, setClientes);
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
            <NavAdmin celular={false} mostrar={"clientes"} />
          </Col>
          <Col xs={12} className="d-bock d-md-none gx-0">
            <NavAdmin celular={true} mostrar={"clientes"} />
          </Col>
          {mostrarCreate && (
            <Col md={10} className="">
              <CreateClientes
                setMostrarCreate={setMostrarCreate}
                cliente={cliente}
                setCliente={setCliente}
                handleCreateCliente={handleCreateCliente}
                handleSubmit={handleSubmit}
                errors={errors}
                register={register}
              />
            </Col>
          )}
          {mostrarVer && (
            <Col md={10} className="d-flex justify-content-center">
              <div className="text-center">
                <VerDatoAdmin setMostrarVer={setMostrarVer} dato={cliente} />
              </div>
            </Col>
          )}
          {mostrarEditar && (
            <Col md={10}>
              <ClientesEditar
                cliente={cliente}
                setCliente={setCliente}
                setMostrarEditar={setMostrarEditar}
                handleEditarCliente={handleEditarCliente}
                handleSubmit={handleSubmit}
                register={register}
                errors={errors}
              />
            </Col>
          )}
          <Col
            md={mostrarCreate || mostrarEditar || mostrarVer ? 12 : 10}
            sm={12}
            className="text-center d-md-flex flex-column align-items-center justify-content-between"
          >
            {!mostrarCreate && (
              <div className="mt-3 mb-3">
                <button className="admin-button" onClick={handleCreate}>
                  Crear Cliente{" "}
                  <FontAwesomeIcon
                    icon={faFileSignature}
                    className="icon-admin"
                  />
                </button>
              </div>
            )}
            {clientes && clientes.length > 0 ? (
              <MainClientes
                clientes={clientes}
                handleVer={handleVer}
                handleEditar={handleEditar}
                handleDelete={handleDelete}
              />
            ) : (
              <p>No hay Clientes</p>
            )}
          </Col>

        </Row>
      </div>
    </div>
  );
};

export default Clientes;
