import {  Col, Row } from "react-bootstrap";
import MainProveedores from "./MainProveedores";
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
import { useForm } from "react-hook-form";
import ProveedoresEditar from "./ProveedoresEditar";
import ProveedorCrear from "./ProveedorCrear";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileSignature } from "@fortawesome/free-solid-svg-icons";
import { useStore } from "../../../store/AuthStore";

const Proveedores = () => {

  const { color } = useStore();

  const [proveedores, setProveedores] = useState();

  const [proveedor, setProveedor] = useState();

  const [mostrarVer, setMostrarVer] = useState();

  const [mostrarEditar, setMostrarEditar] = useState();

  const [mostrarCrear, setMostrarCrear] = useState();

  const API_ROUTE = import.meta.env.VITE_API_URL;

  const RUTA_PROVEEDORES = `${API_ROUTE}${rutas.proveedores}`;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    getDatos(RUTA_PROVEEDORES, setProveedores);
  }, []);

  const handleVer = (id) => {
    setMostrarVer(true);
    setMostrarEditar(false);
    setMostrarCrear(false);
    getDato(`${RUTA_PROVEEDORES}/${id}`, setProveedor);
  };

  const handleEditar = (id) => {
    setMostrarVer(false);
    setMostrarEditar(true);
    setMostrarCrear(false);
    getDato(`${RUTA_PROVEEDORES}/${id}`, setProveedor);
  };

  const handleCrear = () => {
    setMostrarVer(false);
    setMostrarEditar(false);
    setMostrarCrear(true);
    reset();
  };

  const handleCrearProveedor = async (data) => {
    try {
      await createDato(`${RUTA_PROVEEDORES}/create`, data, "proveedor");
      await getDatos(RUTA_PROVEEDORES, setProveedores);
      setMostrarCrear(false);
      setProveedor("");
      reset();
    } catch (error) {
      MySwal.fire({
        icon: "error",
        title: "¡Error!",
        text: error,
      });
    }
  };

  const handleEditarProveedor = async (data) => {
    try {
      await updateDato(
        `${RUTA_PROVEEDORES}/update/${proveedor.id_proveedor}`,
        data,
        "proveedor"
      );
      await getDatos(RUTA_PROVEEDORES, setProveedores);
      setMostrarEditar(false);
      setProveedor("");
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
        `${RUTA_PROVEEDORES}/delete/${id}`,
        "proveedor"
      );
      if (eliminado) {
        await getDatos(RUTA_PROVEEDORES, setProveedores);
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
      <Row>
        <Col md={2} className="contenedor-admin-links-pc d-none d-md-block">
          <NavAdmin celular={false} mostrar={"proveedores"} />
        </Col>
        <Col xs={12} className="d-bock d-md-none">
          <NavAdmin celular={true} mostrar={"proveedores"} />
        </Col>
        {mostrarCrear && (
          <Col md={10}>
            <ProveedorCrear
              setMostrarCrear={setMostrarCrear}
              proveedor={proveedor}
              setProveedor={setProveedor}
              handleCrearProveedor={handleCrearProveedor}
              handleSubmit={handleSubmit}
              register={register}
              errors={errors}
            />
          </Col>
        )}
        {mostrarVer && (
          <Col md={10} className="d-flex justify-content-center">
            <div className="text-center">
              <VerDatoAdmin setMostrarVer={setMostrarVer} dato={proveedor} />
            </div>
          </Col>
        )}
        {mostrarEditar && (
          <Col md={10}>
            <ProveedoresEditar
              setMostrarEditar={setMostrarEditar}
              proveedor={proveedor}
              setProveedor={setProveedor}
              handleEditarProveedor={handleEditarProveedor}
              handleSubmit={handleSubmit}
              register={register}
              errors={errors}
            />
          </Col>
        )}
        <Col
          md={mostrarCrear || mostrarEditar || mostrarVer ? 12 : 10}
          sm={12}
          className={
            mostrarCrear || mostrarEditar || mostrarVer
              ? "text-center d-flex justify-content-center flex-column align-items-center"
              : "text-center"
          }
        >
          {!mostrarCrear && (
            <div className="mt-3 mb-3">
              <button className="admin-button" onClick={handleCrear}>
                Crear
                <FontAwesomeIcon
                  icon={faFileSignature}
                  className="icon-admin"
                />
              </button>
            </div>
          )}
          {proveedores && proveedores.length > 0 ? (
            <MainProveedores
              proveedores={proveedores}
              handleVer={handleVer}
              handleEditar={handleEditar}
              handleDelete={handleDelete}
            />
          ) : (
            <p>No hay Proveedores</p>
          )}
        </Col>
      </Row>
    </div>
    </div>
  );
};

export default Proveedores;
