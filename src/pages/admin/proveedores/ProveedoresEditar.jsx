import { faPenToSquare, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Form } from "react-bootstrap";

const ProveedoresEditar = ({
  setMostrarEditar,
  proveedor,
  setProveedor,
  handleEditarProveedor,
  handleSubmit,
  register,
  errors,
}) => {
  return (
    <div className="d-flex flex-column align-items-center text-center">
      <button
        className="admin-button-editar"
        onClick={() => setMostrarEditar(false)}
      >
        <FontAwesomeIcon icon={faTimes} size="lg" />
      </button>
      <h3>Editar proveedor</h3>
      {proveedor && (
        <Form
          onSubmit={handleSubmit(handleEditarProveedor)}
          className="d-flex flex-column align-items-center"
        >
          <img
            src={proveedor.imagen_proveedor}
            className="img-fluid w-25 mt-3 mb-3"
          />
          <Form.Group>
            <Form.Label>Nombre:</Form.Label>
            <Form.Control
              value={proveedor.nombre_proveedor}
              name="nombre_proveedor"
              {...register("nombre_proveedor", {
                required: "El nombre es obligatorio",
              })}
              onChange={(e) =>
                setProveedor({ ...proveedor, [e.target.name]: e.target.value })
              }
            />
            {errors.nombre_proveedor && (
              <p>{errors.nombre_proveedor.message}</p>
            )}
          </Form.Group>
          <Form.Group>
            <Form.Label>Imagen:</Form.Label>
            <Form.Control
              value={proveedor.imagen_proveedor}
              name="imagen_proveedor"
              {...register("imagen_proveedor", {
                required: "El imagen es obligatorio",
              })}
              onChange={(e) =>
                setProveedor({ ...proveedor, [e.target.name]: e.target.value })
              }
            />
            {errors.imagen_proveedor && (
              <p>{errors.imagen_proveedor.message}</p>
            )}
            <small className="form-text text-center">
              Ingrese un link de una imagen
            </small>
          </Form.Group>
          <Form.Group>
            <Form.Label>Email:</Form.Label>
            <Form.Control
              value={proveedor.email_proveedor}
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
            <Form.Label>Telefono:</Form.Label>
            <Form.Control
              value={proveedor.telefono_proveedor}
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
          <button className="admin-button-editar mt-3" type="submit">
            Editar
            <FontAwesomeIcon icon={faPenToSquare} className="icon-admin" />
          </button>
        </Form>
      )}
    </div>
  );
};

export default ProveedoresEditar;
