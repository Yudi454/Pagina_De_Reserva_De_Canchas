import { faFileSignature, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Form } from "react-bootstrap";

const ProveedorCrear = ({
  setMostrarCrear,
  proveedor,
  setProveedor,
  handleCrearProveedor,
  handleSubmit,
  register,
  errors,
}) => {
  return (
    <div className="d-flex flex-column align-items-center text-center mb-5">
      <button className="admin-button" onClick={() => setMostrarCrear(false)}>
        <FontAwesomeIcon icon={faTimes} size="lg" />
      </button>
      <h3>Crear proveedor</h3>
      {proveedor && proveedor.imagen_proveedor && (
        <img src={proveedor.imagen_proveedor} className="img-fluid w-25 mt-3 mb-3" />
      )}
      <Form onSubmit={handleSubmit(handleCrearProveedor)}>
        <Form.Group>
          <Form.Label>Nombre:</Form.Label>
          <Form.Control
            name="nombre_proveedor"
            {...register("nombre_proveedor", {
              required: "El nombre es obligatorio",
            })}
            onChange={(e) =>
              setProveedor({ ...proveedor, [e.target.name]: e.target.value })
            }
          />
          {errors.nombre_proveedor && <p>{errors.nombre_proveedor.message}</p>}
        </Form.Group>
        <Form.Group>
          <Form.Label>Imagen:</Form.Label>
          <Form.Control
            name="imagen_proveedor"
            {...register("imagen_proveedor", {
              required: "El imagen es obligatorio",
            })}
            onChange={(e) =>
              setProveedor({ ...proveedor, [e.target.name]: e.target.value })
            }
          />
          {errors.imagen_proveedor && <p>{errors.imagen_proveedor.message}</p>}
        </Form.Group>
        <Form.Group>
          <Form.Label>Email:</Form.Label>
          <Form.Control
            name="email_proveedor"
            {...register("email_proveedor", {
              required: "El email es obligatorio",
            })}
            onChange={(e) =>
              setProveedor({ ...proveedor, [e.target.name]: e.target.value })
            }
          />
          {errors.email_proveedor && <p>{errors.email_proveedor.message}</p>}
          <small className="form-text text-center">
            Ingrese un link de una imagen
          </small>
        </Form.Group>
        <Form.Group>
          <Form.Label>Telefono:</Form.Label>
          <Form.Control
            name="telefono_proveedor"
            {...register("telefono_proveedor", {
              required: "El telefono es obligatorio",
            })}
            onChange={(e) =>
              setProveedor({ ...proveedor, [e.target.name]: e.target.value })
            }
          />
          {errors.telefono_proveedor && (
            <p>{errors.telefono_proveedor.message}</p>
          )}
        </Form.Group>
        <button className="admin-button mt-3" type="submit">
          Crear Proveedor{" "}
          <FontAwesomeIcon className="icon-admin" icon={faFileSignature} />
        </button>
      </Form>
    </div>
  );
};

export default ProveedorCrear;
