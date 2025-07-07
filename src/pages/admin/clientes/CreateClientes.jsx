import { faFileCirclePlus, faFileSignature, faNoteSticky, faPenToSquare, faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  Form } from "react-bootstrap";
import "../../../css/admin/Admin.css"



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
    <div className="d-flex flex-column align-items-center text-center">
      <button onClick={() => setMostrarCreate(false)}><FontAwesomeIcon icon={faTimes} size="lg"/></button>
      <h3>Crear cliente</h3>
      <Form onSubmit={handleSubmit(handleCreateCliente)}>
        <Form.Group>
          <Form.Label>Usuario:</Form.Label>
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
          <Form.Label>Email:</Form.Label>
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
          <Form.Label>Telefono:</Form.Label>
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
          <Form.Label>Contraseña:</Form.Label>
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
        <button type="submit" className="admin-button mt-3">Crear cliente <FontAwesomeIcon className="icon-admin" icon={faFileSignature}/></button>
      </Form>
    </div>
  );
};

export default CreateClientes;
