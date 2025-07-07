import MainCaja from "./MainCaja";
import NavAdmin from "../NavAdmin";
import { CardImg, Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { rutas } from "../../../routes/Rutas";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { buscarDato, createDato } from "../../../customHooks/UseApi";
import Carrito from "./Carrito";
import "../../../css/admin/Admin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCashRegister } from "@fortawesome/free-solid-svg-icons";
import { useStore } from "../../../store/AuthStore";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

const Caja = () => {
  const { color } = useStore();

  const [venta, setVenta] = useState();

  const [carrito, setCarrito] = useState();

  const [producto, setProducto] = useState();

  const [productos, setProductos] = useState();

  const API_ROUTE = import.meta.env.VITE_API_URL;

  const RUTA_VENTAS = `${API_ROUTE}${rutas.ventas}`;

  const RUTA_PRODUCTOS = `${API_ROUTE}${rutas.productos}`;

  const user = useStore((state) => state.user);

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
    <div className={color === "Claro" ? "modo-claro" : "modo-oscuro"}>
      <div className="admin-container">
        <Row className="gx-0">
          {user && user.rol === "admin" && (
            <>
              <Col
                md={2}
                sm={3}
                className="contenedor-admin-links-pc d-none d-sm-block"
              >
                <NavAdmin celular={false} mostrar={"caja"} />
              </Col>
              <Col xs={12} className="d-block d-sm-none">
                <NavAdmin celular={true} mostrar={"caja"} />
              </Col>
            </>
          )}

          <Col md={5} sm={9} className="mt-4 mt-sm-0 mt-md-0  ">
            <h2 className="text-center">
              CAJA{" "}
              <FontAwesomeIcon icon={faCashRegister} className="icon-admin" />
            </h2>

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
            <Col md={5} sm={12} className="mt-4 mt-sm-3 mt-md-0">
              <Carrito carrito={carrito} handleCargar={handleCargar} />
            </Col>
          )}
        </Row>
      </div>
    </div>
  );
};

export default Caja;
