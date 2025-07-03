import { Button, Col, Form, Row } from "react-bootstrap";
import MainProductos from "./MainProductos";
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
import VerDatoAdmin from "../../../components/verDatoAdmin/VerDatoAdmin";
import ProductosEditar from "./ProductosEditar";
import { rutas } from "../../../routes/Rutas";
import { useForm } from "react-hook-form";
import ProductosCrear from "./ProductosCrear";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

const Productos = () => {
  const [mostrarVer, setMostrarVer] = useState(false);

  const [mostrarEditar, setMostrarEditar] = useState(false);

  const [mostrarCrear, setMostrarCrear] = useState(false);

  const [producto, setProducto] = useState();

  const [productos, setProductos] = useState();

  const [buscar, setBuscar] = useState({ nombre_producto: "" });

  const API_ROUTE = import.meta.env.VITE_API_URL;

  const RUTA_PRODUCTOS = `${API_ROUTE}${rutas.productos}`;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const traerDatos = () => {
    getDatos(RUTA_PRODUCTOS, setProductos);
  };

  useEffect(() => {
    traerDatos();
  }, []);

  const handleVer = (id) => {
    setMostrarVer(true);
    setMostrarEditar(false);
    setMostrarCrear(false);
    getDato(`${RUTA_PRODUCTOS}/${id}`, setProducto);
  };

  const handleEditar = (id) => {
    setMostrarVer(false);
    setMostrarEditar(true);
    setMostrarCrear(false);
    getDato(`${RUTA_PRODUCTOS}/${id}`, setProducto);
  };

  const handleCrear = () => {
    setMostrarVer(false);
    setMostrarEditar(false);
    setMostrarCrear(true);
    reset();
  };

  const handleBuscar = async (e) => {
    e.preventDefault();

    console.log(buscar);
    

    try {
      buscarDato(
        `${RUTA_PRODUCTOS}/buscar`,
        { nombre_producto: buscar.nombre_producto },
        setProductos
      );
    } catch (error) {
      MySwal.fire({
        icon: "error",
        title: "¡Error!",
        text: error.response.data.message,
      });
    }
  };

  const handleCrearProducto = async (data) => {
    try {
      await createDato(`${RUTA_PRODUCTOS}/create`, data, "producto");
      await getDatos(RUTA_PRODUCTOS, setProductos);
      setMostrarCrear(false);
      setProducto("");
      reset();
    } catch (error) {
      MySwal.fire({
        icon: "error",
        title: "¡Error!",
        text: error,
      });7
    }
  };

  const handleEditarProducto = async (data) => {
    try {
      await updateDato(
        `${RUTA_PRODUCTOS}/update/${producto.id_producto}`,
        data,
        "producto"
      );
      await getDatos(RUTA_PRODUCTOS, setProductos);
      setMostrarEditar(false);
      setProducto("");
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
        `${RUTA_PRODUCTOS}/delete/${id}`,
        "producto"
      );
      if (eliminado) {
        await getDatos(RUTA_PRODUCTOS, setProductos);
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
    <div style={{ paddingTop: "20vh" }}>
      <Row>
        <Col>
          <NavAdmin />
        </Col>
        <Col>
          {!mostrarCrear && <Button onClick={handleCrear}>Crear</Button>}
          <Form onSubmit={(e) => handleBuscar(e)}>
            <Form.Group>
              <Form.Control
                placeholder="Buscar..."
                name="buscar"
                onChange={(e) => setBuscar({
                  ...buscar,
                  nombre_producto: e.target.value,
                })}
              />

              <Button type="submit">Buscar</Button>
              <Button type="button" onClick={traerDatos}>
                Reiniciar
              </Button>
            </Form.Group>
          </Form>
          {productos && productos.length > 0 ? (
            <MainProductos
              productos={productos}
              handleDelete={handleDelete}
              handleEditar={handleEditar}
              handleVer={handleVer}
            />
          ) : (
            <p>No hay Productos</p>
          )}
        </Col>
        {mostrarVer && (
          <Col>
            <VerDatoAdmin setMostrarVer={setMostrarVer} dato={producto} />
          </Col>
        )}
        {mostrarEditar && (
          <Col>
            <ProductosEditar
              producto={producto}
              setProducto={setProducto}
              setMostrarEditar={setMostrarEditar}
              handleEditarProducto={handleEditarProducto}
              handleSubmit={handleSubmit}
              register={register}
              errors={errors}
            />
          </Col>
        )}
        {mostrarCrear && (
          <Col>
            <ProductosCrear
              setMostrarCrear={setMostrarCrear}
              producto={producto}
              setProducto={setProducto}
              handleCrearProducto={handleCrearProducto}
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

export default Productos;
