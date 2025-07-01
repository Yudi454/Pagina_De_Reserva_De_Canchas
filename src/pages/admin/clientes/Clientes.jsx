import { Button, Col, Row } from "react-bootstrap";
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

const Clientes = () => {
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
    reset()
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
        `${RUTA_CLIENTES}/update/${cliente.id_clientes}`,
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
    <>
      <Row>
        <Col md={3}>
          <NavAdmin />
        </Col>
        <Col>
          <Button onClick={handleCreate}>Crear Cliente</Button>
          <MainClientes
            clientes={clientes}
            handleVer={handleVer}
            handleEditar={handleEditar}
            handleDelete={handleDelete}
          />
        </Col>
        {mostrarVer && (
          <Col>
            <VerDatoAdmin setMostrarVer={setMostrarVer} dato={cliente} />
          </Col>
        )}
        {mostrarEditar && (
          <Col>
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
        {mostrarCreate && (
          <Col>
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
      </Row>
    </>
  );
};

export default Clientes;
