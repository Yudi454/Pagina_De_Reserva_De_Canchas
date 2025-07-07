import { faFileSignature, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {  Form } from "react-bootstrap";

const CanchasCrear = ({
  setMostrarCrear,
  cancha,
  setCancha,
  handleCrearCancha,
  handleSubmit,
  register,
  errors,
}) => {
  return (
    <div className="d-flex flex-column align-items-center text-center">
      <button className="admin-button" onClick={() => setMostrarCrear(false)}>
        <FontAwesomeIcon icon={faTimes} size="lg" />
      </button>
      <h3>Crear</h3>
      <Form onSubmit={handleSubmit(handleCrearCancha)}>
        <Form.Group>
          <Form.Label>Imagen:</Form.Label>
          <Form.Control
            name="imagen_cancha"
            {...register("imagen_cancha", {
              required: "La imagen es obligatoria",
            })}
            onChange={(e) =>
              setCancha({ ...cancha, [e.target.name]: e.target.value })
            }
          />
          {errors.imagen_cancha && <p>{errors.imagen_cancha.message}</p>}
        </Form.Group>
        <Form.Group>
          <Form.Label>Tipo:</Form.Label>
          <Form.Control
            name="tipo_cancha"
            {...register("tipo_cancha", {
              required: "El tipo es obligatorio",
            })}
            onChange={(e) =>
              setCancha({ ...cancha, [e.target.name]: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Precio:</Form.Label>
          <Form.Control
            name="precio_cancha"
            {...register("precio_cancha", {
              required: "El precio es obligatorio",
            })}
            onChange={(e) =>
              setCancha({ ...cancha, [e.target.name]: e.target.value })
            }
          />
          {errors.precio_cancha && <p>{errors.precio_cancha.message}</p>}
        </Form.Group>
        <button type="submit" className="admin-button mt-3">
          Crear cliente{" "}
          <FontAwesomeIcon className="icon-admin" icon={faFileSignature} />
        </button>
      </Form>
    </div>
  );
};

export default CanchasCrear;
