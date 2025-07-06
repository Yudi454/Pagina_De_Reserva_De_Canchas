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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileSignature } from "@fortawesome/free-solid-svg-icons";

const Productos = () => {
  const [mostrarVer, setMostrarVer] = useState(false);

  const [mostrarEditar, setMostrarEditar] = useState(false);

  const [mostrarCrear, setMostrarCrear] = useState(false);

  const [producto, setProducto] = useState();

  const [productos, setProductos] = useState();

  const [buscar, setBuscar] = useState();

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
    try {
      buscarDato(
        `${RUTA_PRODUCTOS}/buscar`,
        { nombre_producto: buscar.buscar },
        setProductos
      );
      setMostrarCrear(false);
      setMostrarEditar(false);
      setMostrarVer(false);
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
      });
    }
  };

  const handleEditarProducto = async (data) => {
    try {
      const productoFinal = {
        ...data,
        imagen_producto: data.imagen,
      };
      await updateDato(
        `${RUTA_PRODUCTOS}/update/${producto.id_producto}`,
        productoFinal,
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
    <div className="admin-container">
      <Row>
        <Col md={2} className="contenedor-admin-links-pc d-none d-md-block">
          <NavAdmin celular={false} mostrar={"productos"} />
        </Col>
        <Col xs={12} className="d-bock d-md-none">
          <NavAdmin celular={true} mostrar={"productos"} />
        </Col>
        {mostrarCrear && (
          <Col md={10}>
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
        {mostrarVer && (
          <Col md={10} className="d-flex justify-content-center">
            <div className="text-center">
              <VerDatoAdmin setMostrarVer={setMostrarVer} dato={producto} />
            </div>
          </Col>
        )}
        {mostrarEditar && (
          <Col md={10}>
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
              <Button onClick={handleCrear}>
                Crear productos
                <FontAwesomeIcon
                  icon={faFileSignature}
                  className="icon-admin"
                />
              </Button>
            </div>
          )}
          <Form
            onSubmit={(e) => handleBuscar(e)}
            className="d-flex justify-content-center"
          >
            <Form.Group>
              <Form.Control
                placeholder="Buscar..."
                name="buscar"
                onChange={(e) => setBuscar({ [e.target.name]: e.target.value })}
              />
              <small className="form-text text-center">
                Escribe el nombre del producto y luego clickea en "Buscar
                producto".
                <br />
                Clickea reiniciar para traer todos los productos
              </small>
              <div className="mt-3 mb-4">
                <Button type="submit" className="me-4">
                  Buscar
                </Button>
                <Button type="button" onClick={traerDatos}>
                  Reiniciar
                </Button>
              </div>
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
      </Row>
    </div>
  );
};

export default Productos;
