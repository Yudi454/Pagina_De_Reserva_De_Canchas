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
const MySwal = withReactContent(Swal);

const Ventas = () => {
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
      let total = 0;

      venta.productos.forEach((producto) => {
        total += producto.precio_producto * producto.cantidad;
      });

      const ventaFinal = {
        ...venta,
        total_venta: total,
      };

      await createDato(`${RUTA_VENTAS}/create`, ventaFinal, "venta");
      await getDato(RUTA_VENTAS, setVentas);
      setMostrarCrear(false);
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
    if (venta.productos) {
      setVenta({ ...venta, productos: [...venta.productos, producto] });
      setProductos(null);
      resetProducto();
      toast.success("Producto añadido con exito");
    } else {
      setVenta({ ...venta, productos: [producto] });
      setProductos(null);
      resetProducto();
      toast.success("Producto añadido cone exito");
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
          <MainVentas
            ventas={ventas}
            handleVer={handleVer}
            handleEditar={handleEditar}
            handleDelete={handleDelete}
          />
        </Col>
        {mostrarVer && (
          <Col>
            <VerVentas venta={venta} setMostrarVer={setMostrarVer} />
          </Col>
        )}
        {mostrarEditar && (
          <Col>
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
        {mostrarCrear && (
          <Col>
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
      </Row>
    </>
  );
};

export default Ventas;
