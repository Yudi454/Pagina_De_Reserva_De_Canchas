import { Button, Col, Row } from "react-bootstrap";
import MainVentas from "./MainVentas";
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
import VerVentas from "./VerVentas";
import VentasEditar from "./VentasEditar";
import VentasCrear from "./VentasCrear";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileSignature } from "@fortawesome/free-solid-svg-icons";
const MySwal = withReactContent(Swal);
import { useStore } from "../../../store/AuthStore";

const Ventas = () => {
  const { color } = useStore();

  const [ventas, setVentas] = useState();

  const [producto, setProducto] = useState();

  const [productos, setProductos] = useState();

  const [venta, setVenta] = useState();

  const [mostrarVer, setMostrarVer] = useState(false);

  const [mostrarEditar, setMostrarEditar] = useState(false);

  const [mostrarCrear, setMostrarCrear] = useState(false);

  const API_ROUTE = import.meta.env.VITE_API_URL;

  const RUTA_VENTAS = `${API_ROUTE}${rutas.ventas}`;

  const RUTA_PRODUCTOS = `${API_ROUTE}${rutas.productos}`;

  // Para el formulario "Crear Venta"
  const {
    register: registerVenta,
    handleSubmit: handleSubmitVenta,
    formState: { errors: errorsVenta },
    reset: resetVenta,
  } = useForm();

  // Para el formulario "Añadir Producto"
  const {
    register: registerProducto,
    handleSubmit: handleSubmitProducto,
    formState: { errors: errorsProducto },
    reset: resetProducto,
  } = useForm();

  useEffect(() => {
    getDatos(RUTA_VENTAS, setVentas);
  }, []);

  const handleVer = (id) => {
    setMostrarVer(true);
    setMostrarEditar(false);
    setMostrarCrear(false);
    getDato(`${RUTA_VENTAS}/${id}`, setVenta);
  };

  const handleEditar = (id) => {
    setMostrarVer(false);
    setMostrarEditar(true);
    setMostrarCrear(false);
    getDato(`${RUTA_VENTAS}/${id}`, setVenta);
  };

  const handleCrear = () => {
    setMostrarVer(false);
    setMostrarEditar(false);
    setMostrarCrear(true);
  };

  const handleBuscar = () => {
    if (producto) {
      buscarDato(
        `${RUTA_PRODUCTOS}/buscar`,
        { nombre_producto: producto.nombre_producto },
        setProductos
      );
      toast.success("Productos similares encontrados");
    } else {
      toast.error("Ingrese un valor antes de buscar");
    }
  };

  const handleCrearVenta = async (data) => {
    try {
      if (venta.productos) {
        let total = 0;

        venta.productos.forEach((producto) => {
          total += producto.precio_producto * producto.cantidad;
        });

        const ventaFinal = {
          ...venta,
          total_venta: total,
        };

        const exito = await createDato(
          `${RUTA_VENTAS}/create`,
          ventaFinal,
          "venta"
        );
        if (exito) {
          await getDatos(RUTA_VENTAS, setVentas);
          setMostrarCrear(false);
          setVenta("");
          resetVenta();
        }
      } else {
        toast.error("Agregue un producto primero");
      }
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
        `${RUTA_VENTAS}/delete/${id}`,
        "venta"
      );
      if (eliminado) {
        await getDatos(RUTA_VENTAS, setVentas);
      }
    } catch (error) {
      MySwal.fire({
        icon: "error",
        title: "¡Error!",
        text: error,
      });
    }
  };

  const handleEditarVenta = async () => {
    try {
      let total = 0;

      venta.productos.forEach((producto) => {
        total += producto.precio_producto * producto.cantidad;
      });

      const ventaFinal = {
        ...venta,
        total_venta: total,
      };

      await updateDato(
        `${RUTA_VENTAS}/update/${ventaFinal.id_venta}`,
        ventaFinal,
        "venta"
      );
      await getDatos(RUTA_VENTAS, setVentas);
      setMostrarEditar(false);
      setVenta("");
      resetVenta();
    } catch (error) {
      MySwal.fire({
        icon: "error",
        title: "¡Error!",
        text: error,
      });
    }
  };

  const añadirProducto = (e) => {
    if (producto && producto.precio_producto) {
      if (venta.productos) {
        setVenta({ ...venta, productos: [...venta.productos, producto] });
        setProductos(null);
        resetProducto();
        toast.success("Producto añadido con exito");
        setProducto("");
      } else {
        setVenta({ ...venta, productos: [producto] });
        setProductos(null);
        resetProducto();
        toast.success("Producto añadido cone exito");
        setProducto("");
      }
    } else {
      toast.error("Selecciona primero un producto haciendo click en Nombre");
    }
  };

  return (
    <div className={color === "Claro" ? "modo-claro" : "modo-oscuro"}>
      <div className="admin-container">
        <Row className="gx-0">
          <Col md={2} className="contenedor-admin-links-pc d-none d-md-block">
            <NavAdmin celular={false} mostrar={"ventas"} />
          </Col>
          <Col xs={12} className="d-bock d-md-none">
            <NavAdmin celular={true} mostrar={"ventas"} />
          </Col>
          {mostrarCrear && (
            <Col md={10}>
              <VentasCrear
                venta={venta}
                setVenta={setVenta}
                producto={producto}
                productos={productos}
                setProductos={setProductos}
                setProducto={setProducto}
                setMostrarCrear={setMostrarCrear}
                añadirProducto={añadirProducto}
                handleCrearVenta={handleCrearVenta}
                handleBuscar={handleBuscar}
                handleSubmitVenta={handleSubmitVenta}
                handleSubmitProducto={handleSubmitProducto}
                registerVenta={registerVenta}
                registerProducto={registerProducto}
                errorsVenta={errorsVenta}
                errorsProducto={errorsProducto}
              />
            </Col>
          )}
          {mostrarVer && (
            <Col md={10} className="d-flex justify-content-center">
              <div className="text-center">
                <VerVentas venta={venta} setMostrarVer={setMostrarVer} />
              </div>
            </Col>
          )}
          {mostrarEditar && (
            <Col md={10}>
              <VentasEditar
                venta={venta}
                producto={producto}
                productos={productos}
                setVenta={setVenta}
                setProductos={setProductos}
                setProducto={setProducto}
                setMostrarEditar={setMostrarEditar}
                añadirProducto={añadirProducto}
                handleEditarVenta={handleEditarVenta}
                handleBuscar={handleBuscar}
                handleSubmitVenta={handleSubmitVenta}
                handleSubmitProducto={handleSubmitProducto}
                registerVenta={registerVenta}
                registerProducto={registerProducto}
                errorsVenta={errorsVenta}
                errorsProducto={errorsProducto}
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
                  Crear
                  <FontAwesomeIcon
                    icon={faFileSignature}
                    className="icon-admin"
                  />
                </button>
              </div>
            )}
            {ventas && ventas.length > 0 ? (
              <MainVentas
                ventas={ventas}
                handleVer={handleVer}
                handleEditar={handleEditar}
                handleDelete={handleDelete}
              />
            ) : (
              <p>No hay Ventas</p>
            )}
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Ventas;
