import { Button, Form } from "react-bootstrap";
const CreateClientes = ({
  setMostrarCreate,
  cliente,
  setCliente,
  handleCreateCliente,
  handleSubmit,
  errors,
  register,
}) => {
  return (
    <>
      <Button onClick={() => setMostrarCreate(false)}>X</Button>
      <h3>Crear</h3>
      <Form onSubmit={handleSubmit(handleCreateCliente)}>
        <Form.Group>
          <Form.Label>Usuario</Form.Label>
          <Form.Control
            name="usuario"
            {...register("usuario", {
              required: "El usuario es obligatorio",
            })}
            onChange={(e) =>
              setCliente({ ...cliente, [e.target.name]: e.target.value })
            }
          />
          {errors.usuario && <p>{errors.usuario.message}</p>}
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            name="email_cliente"
            {...register("email_cliente", {
              required: "El email es obligatorio",
            })}
            onChange={(e) =>
              setCliente({ ...cliente, [e.target.name]: e.target.value })
            }
          />
          {errors.email_cliente && <p>{errors.email_cliente.message}</p>}
        </Form.Group>
        <Form.Group>
          <Form.Label>Telefono</Form.Label>
          <Form.Control
            name="telefono_cliente"
            {...register("telefono_cliente", {
              required: "El telefono es obligatorio",
              minLegnth: { value: 7, message: "Minimo 7 numeros" },
            })}
            onChange={(e) =>
              setCliente({ ...cliente, [e.target.name]: e.target.value })
            }
          />
          {errors.telefono_cliente && <p>{errors.telefono_cliente.message}</p>}
        </Form.Group>
        <Form.Group>
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            name="contraseña_cliente"
            {...register("contraseña_cliente", {
              required: "La contraseña es obligatorio",
              minLegnth: { value: 7, message: "Minimo 7 caracteres" },
            })}
            onChange={(e) =>
              setCliente({ ...cliente, [e.target.name]: e.target.value })
            }
          />
        </Form.Group>
        <Button type="submit">Crear</Button>
      </Form>
    </>
  );
};

export default CreateClientes;
