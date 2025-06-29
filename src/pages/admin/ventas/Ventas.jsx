import { Col, Row } from "react-bootstrap";
import MainVentas from "./MainVentas";
import NavAdmin from "../NavAdmin";
import { useEffect, useState } from "react";
import {
  deleteDato,
  getDato,
  getDatos,
  updateDato,
} from "../../../customHooks/UseApi";
import { rutas, URLPRODUCTOS, URLVENTAS } from "../../../routes/Rutas";
import VerVentas from "./VerVentas";
import VentasEditar from "./VentasEditar";

const Ventas = () => {
  const [ventas, setVentas] = useState();

  const [productos, setProductos] = useState();

  const [productosFiltrados, setProductosFiltrados] = useState();

  const [productoEncontrado, setProductoEncontrado] = useState();

  const [venta, setVenta] = useState();

  const [mostrarVer, setMostrarVer] = useState(false);

  const [mostrarEditar, setMostrarEditar] = useState(false);

  const [mostrarProductos, setMostrarProductos] = useState(false);

  const API_ROUTE = import.meta.env.VITE_API_URL;

  const RUTA_VENTAS = `${API_ROUTE}${rutas.ventas}`;

  useEffect(() => {
    getDatos(RUTA_VENTAS, setVentas);
  }, []);

  const handleVer = (id) => {
    setMostrarVer(true);
    setMostrarEditar(false);
    getDato(`${RUTA_VENTAS}/${id}`, setVenta);
  };

  const handleEditar = (id) => {
    setMostrarVer(false);
    setMostrarEditar(true);
    getDato(`${RUTA_VENTAS}/${id}`, setVenta);
  };

  const handleDelete = (id) => {
    deleteDato(`${RUTA_VENTAS}/delete/${id}`, setVentas);
  };

  const deleteProducto = (id) => {
    try {
      const Productos = Object(venta.productos).filter((p) => p.id != id);
      setVenta({ ...venta, productos: Productos });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      let Total = 0;
      Object(venta.productos).map(
        (producto) => (Total += producto.precio_producto * producto.cantidad)
      );

      const ventaFinal = { ...venta, total: Total };

      console.log(ventaFinal);
      

      updateDato(`${RUTA_VENTAS}/update/${ventaFinal.id_venta}`, ventaFinal);
      alert("Venta actualizada con exito");
      getDatos(RUTA_VENTAS, setVentas);
      setMostrarEditar(false);
    } catch (error) {}
  };

  const buscarProducto = (valor) => {
    try {
      setProductosFiltrados(
        productos.filter((producto) =>
          producto.nombre.toLowerCase().includes(valor.toLowerCase())
        )
      );
    } catch (error) {}
  };

  const añadirProducto = () => {
    setVenta({ ...venta, productos: [...venta.productos, productoEncontrado] });
  };

  return (
    <>
      <Row>
        <Col>
          <NavAdmin />
        </Col>
        <Col>
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
              setVenta={setVenta}
              handleSubmit={handleSubmit}
              setMostrarEditar={setMostrarEditar}
              deleteProducto={deleteProducto}
              buscarProducto={buscarProducto}
              productoEncontrado={productoEncontrado}
              productosFiltrados={productosFiltrados}
              productos={productos}
              setProductoEncontrado={setProductoEncontrado}
              mostrarProductos={mostrarProductos}
              setMostrarProductos={setMostrarProductos}
              añadirProducto={añadirProducto}
            />
          </Col>
        )}
      </Row>
    </>
  );
};

export default Ventas;
