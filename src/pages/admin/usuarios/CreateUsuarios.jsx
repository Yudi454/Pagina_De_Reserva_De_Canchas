import React from "react";
import { Button, Form } from "react-bootstrap";

const CreateUsuarios = ({
  setMostrarCrear,
  usuario,
  setUsuario,
  handleCrearUsuario,
  register,
  handleSubmit,
  errors,
}) => {
  return (
    <>
      <Button onClick={() => setMostrarCrear(false)}>X</Button>
      <h3>Crear</h3>
      <Form onSubmit={handleSubmit(handleCrearUsuario)}>
        <Form.Group>
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            name="nombre_usuario"
            {...register("nombre_usuario", {
              required: "El nombre ese requerido",
              maxLength: { value: 30, message: "Maximo 30 caracteres" },
            })}
            onChange={(e) =>
              setUsuario({ ...usuario, [e.target.name]: e.target.value })
            }
          />
          {errors.nombre_usuario && <p>{errors.nombre_usuario.message}</p>}
        </Form.Group>
        <Form.Group>
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            name="apellido_usuario"
            {...register("apellido_usuario", {
              required: "El apellido es requerido",
              maxLength: { value: 30, message: "Maximo 30 caracteres" },
            })}
            onChange={(e) =>
              setUsuario({ ...usuario, [e.target.name]: e.target.value })
            }
          />
          {errors.apellido_usuario && <p>{errors.apellido_usuario.message}</p>}
        </Form.Group>
        <Form.Group>
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            name="contraseña_usuario"
            {...register("contraseña_usuario", {
              required: "La contraseña es requerida",
              minLength: { value: 6, message: "Minimo 6 caracteres" },
            })}
            onChange={(e) =>
              setUsuario({ ...usuario, [e.target.name]: e.target.value })
            }
          />
          {errors.contraseña_usuario && (
            <p>{errors.contraseña_usuario.message}</p>
          )}
        </Form.Group>
        <Form.Group>
          <Form.Label>Rol de usuario</Form.Label>
          <Form.Control
            as="select"
            name="rol"
            {...register("rol", {
              required: "El rol es obligatorio",
            })}
            onChange={(e) =>
              setUsuario({ ...usuario, [e.target.name]: e.target.value })
            }
            defaultValue=""
          >
            <option value="" disabled>
              Seleccione un rol
            </option>
            <option value="admin">Admin</option>
            <option value="empleado">Empleado</option>
          </Form.Control>
          {errors.rol && <p>{errors.rol.message}</p>}
        </Form.Group>
        <Form.Group>
          <Form.Label>DNI</Form.Label>
          <Form.Control
            name="dni"
            {...register("dni", {
              required: "El dni es obligatorio",
              minLength: { value: 7, message: "Minimo 7 numeros" },
              maxLength: { value: 8, message: "Maximo 8 numeros" },
            })}
            onChange={(e) =>
              setUsuario({ ...usuario, [e.target.name]: e.target.value })
            }
          />
          {errors.dni && <p>{errors.dni.message}</p>}
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            name="email_usuario"
            {...register("email_usuario", {
              required: "El email es obligatorio",
            })}
            onChange={(e) =>
              setUsuario({ ...usuario, [e.target.name]: e.target.value })
            }
          />
          {errors.email_usuario && <p>{errors.email_usuario.message}</p>}
        </Form.Group>
        <Form.Group>
          <Form.Label>Telefono</Form.Label>
          <Form.Control
            name="telefono_usuario"
            {...register("telefono_usuario", {
              required: "El telefono es obligatorio",
              minLength: { value: 6, message: "Minimo 6 numeros" },
            })}
            onChange={(e) =>
              setUsuario({ ...usuario, [e.target.name]: e.target.value })
            }
          />
          {errors.telefono_usuario && <p>{errors.telefono_usuario.message}</p>}
        </Form.Group>
        <Button type="submit">Crear</Button>
      </Form>
    </>
  );
};

export default CreateUsuarios;
