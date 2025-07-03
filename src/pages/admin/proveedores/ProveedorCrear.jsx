import React from "react";
import { Button, Form } from "react-bootstrap";

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
    <>
      <Button onClick={() => setMostrarCrear(false)}>X</Button>
      <h3>Crear</h3>

      <Form onSubmit={handleSubmit(handleCrearProveedor)}>
        <Form.Group>
          <Form.Label>Nombre</Form.Label>
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
          <Form.Label>Email</Form.Label>
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
        </Form.Group>
        <Form.Group>
          <Form.Label>Telefono</Form.Label>
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
        <Button type="submit">Editar</Button>
      </Form>
    </>
  );
};

export default ProveedorCrear;
