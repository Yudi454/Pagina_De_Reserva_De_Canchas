import { Button, Col, Row } from "react-bootstrap";
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
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

const Proveedores = () => {
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
    <div style={{paddingTop: "20vh"}}>
      <Row>
        <Col>
          <NavAdmin />
        </Col>
        <Col>
          {!mostrarCrear && <Button onClick={handleCrear}>Crear</Button>}
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
        {mostrarVer && (
          <Col>
            <VerDatoAdmin setMostrarVer={setMostrarVer} dato={proveedor} />
          </Col>
        )}
        {mostrarEditar && (
          <Col>
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
        {mostrarCrear && (
          <Col>
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
      </Row>
    </div>
  );
};

export default Proveedores;
