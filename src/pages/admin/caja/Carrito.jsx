import {
  faCheckCircle,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button } from "react-bootstrap";

const Carrito = ({ carrito, handleCargar }) => {
  console.log(carrito);

  return (
    <div className="text-center">
      <h2>
        Carrito <FontAwesomeIcon icon={faShoppingCart} className="icon-admin" />{" "}
      </h2>
      <>
        {carrito &&
          carrito.map((c) => (
            <ul
              className="ul-admin text-start d-flex align-items-center flex-column d-sm-flex align-items-sm-center flex-sm-column"
              key={c.id_producto}
            >
              <li className="text-center"><img src={c.imagen_producto} className="img-fluid w-50"></img></li>
              <li>Nombre: {c.nombre_producto}</li>
              <li>Cantidad: {c.cantidad}</li>
              <li>SubTotal: {c.precio_producto * c.cantidad}</li>
            </ul>
          ))}
      </>
      <Button onClick={handleCargar}>
        Cargar Carrito{" "}
        <FontAwesomeIcon icon={faCheckCircle} className="icon-admin" />{" "}
      </Button>
    </div>
  );
};

export default Carrito;
