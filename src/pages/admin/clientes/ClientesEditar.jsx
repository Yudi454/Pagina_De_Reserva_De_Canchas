import { faPenToSquare, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  Form } from "react-bootstrap";

const ClientesEditar = ({
  cliente,
  setCliente,
  setMostrarEditar,
  handleEditarCliente,
  handleSubmit,
  register,
  errors,
}) => {
  return (
    <div className="d-flex flex-column align-items-center text-center">
      <button className="admin-button-editar" onClick={() => setMostrarEditar(false)}><FontAwesomeIcon icon={faTimes} size="lg" /></button>
      <h3 className="mt-3">Editar cliente</h3>
      {cliente && (
        <Form onSubmit={handleSubmit(handleEditarCliente)}>
          <Form.Group>
            <Form.Label>Usuario:</Form.Label>
            <Form.Control
              name="usuario"
              value={cliente.usuario}
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
            <Form.Label>Email:</Form.Label>
            <Form.Control
              name="email_cliente"
              value={cliente.email_cliente}
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
            <Form.Label>Telefono:</Form.Label>
            <Form.Control
              name="telefono_cliente"
              value={cliente.telefono_cliente}
              {...register("telefono_cliente", {
                required: "El telefono es obligatorio",
                minLength: { value: 7, message: "Minimo 7 numeros" },
              })}
              onChange={(e) =>
                setCliente({ ...cliente, [e.target.name]: e.target.value })
              }
            />
            {errors.telefono_cliente && (
              <p>{errors.telefono_cliente.message}</p>
            )}
          </Form.Group>
          <Form.Group>
            <Form.Label>Contraseña:</Form.Label>
            <Form.Control
              name="contraseña_cliente"
              {...register("contraseña_cliente", {
                required: "La contraseña es obligatorio",
                minLength: { value: 7, message: "Minimo 7 caracteres" },
              })}
              onChange={(e) =>
                setCliente({ ...cliente, [e.target.name]: e.target.value })
              }
            />
            {errors.contraseña_cliente && (
              <p>{errors.contraseña_cliente.message}</p>
            )}
          </Form.Group>
          <button type="submit" className="admin-button-editar mt-3">Editar <FontAwesomeIcon icon={faPenToSquare} className="icon-admin" /></button>
        </Form>
      )}
    </div>
  );
};

export default ClientesEditar;
