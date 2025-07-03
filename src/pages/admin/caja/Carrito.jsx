import React from "react";
import { Button } from "react-bootstrap";

const Carrito = ({ carrito,handleCargar }) => {
  console.log(carrito);

  return (
    <>
      <p>Carrito</p>
      {carrito &&
        carrito.map((c) => (
          <ul key={c.id_producto}>
            <li >Nombre: {c.nombre_producto}</li>
            <li >Cantidad: {c.cantidad}</li>
            <li >SubTotal: {c.precio_producto * c.cantidad}</li>
          </ul>
        ))}
        <Button onClick={handleCargar}>Cargar Carrito</Button>
    </>
  );
};

export default Carrito;
