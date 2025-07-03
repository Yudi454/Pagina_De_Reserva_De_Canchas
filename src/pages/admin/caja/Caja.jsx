import MainCaja from "./MainCaja";
import NavAdmin from "../NavAdmin";
import { CardImg, Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { rutas } from "../../../routes/Rutas";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { buscarDato, createDato } from "../../../customHooks/UseApi";
import Carrito from "./Carrito";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

const Caja = () => {
  const [venta, setVenta] = useState();

  const [carrito, setCarrito] = useState();

  const [producto, setProducto] = useState();

  const [productos, setProductos] = useState();

  const API_ROUTE = import.meta.env.VITE_API_URL;

  const RUTA_VENTAS = `${API_ROUTE}${rutas.ventas}`;

  const RUTA_PRODUCTOS = `${API_ROUTE}${rutas.productos}`;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    setCarrito(JSON.parse(localStorage.getItem("carrito")));
  }, []);

  const traerCarrito = () => {
    const carrito = JSON.parse(localStorage.getItem("carrito"));
    setCarrito(carrito);
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

  const handleCrear = () => {
    if (localStorage.getItem("carrito")) {
      const carrito = JSON.parse(localStorage.getItem("carrito"));
      carrito.push(producto);
      localStorage.setItem("carrito", JSON.stringify(carrito));
      traerCarrito();
      reset();
      setProductos("");
      toast.success("Producto cargado al carrito");
    } else {
      const carrito = [];
      carrito.push(producto);
      localStorage.setItem("carrito", JSON.stringify(carrito));
      traerCarrito();
      setProductos("");
      reset();
      toast.success("Producto cargado al carrito");
    }
  };

  const handleCargar = async () => {
    try {
      const carritoFinal = carrito.map((v) => ({
        ...v,
        total_venta: v.precio_producto * v.cantidad,
      }));

      const usuario = JSON.parse(localStorage.getItem("usuario"));

      console.log(usuario);
      

      const id_usuario = usuario.id_usuario;

      await createDato(
        `${RUTA_VENTAS}/cargarVentas/${id_usuario}`,
        carritoFinal,
        "venta"
      );
      setCarrito("");
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
          <MainCaja
            productos={productos}
            producto={producto}
            setProducto={setProducto}
            handleCrear={handleCrear}
            handleBuscar={handleBuscar}
            handleSubmit={handleSubmit}
            register={register}
            errors={errors}
          />
        </Col>
        {localStorage.getItem("carrito") && (
          <Col>
            <Carrito carrito={carrito} handleCargar={handleCargar} />
          </Col>
        )}
      </Row>
    </div>
  );
};

export default Caja;
