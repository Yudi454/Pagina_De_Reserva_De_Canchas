import { faPenToSquare, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  Form } from "react-bootstrap";

const CanchasEditar = ({
  cancha,
  setCancha,
  setMostrarEditar,
  handleEditarCancha,
  handleSubmit,
  register,
  errors,
}) => {
  console.log(cancha);

  return (
    <div className="d-flex flex-column align-items-center text-center">
      <button className="admin-button" onClick={() => setMostrarEditar(false)}>
        <FontAwesomeIcon icon={faTimes} size="lg" />
      </button>
      <h3>Editar cancha</h3>
      {cancha && (
        <>
          <img src={cancha.imagen} className="img-fluid w-25 mt-3 mb-3" />
          <Form onSubmit={handleSubmit(handleEditarCancha)}>
            <Form.Group>
              <Form.Label>Imagen:</Form.Label>
              <Form.Control
                value={cancha.imagen}
                name="imagen"
                {...register("imagen", {
                  required: "La imagen es obligatoria",
                })}
                onChange={(e) =>
                  setCancha({ ...cancha, [e.target.name]: e.target.value })
                }
              />
              {errors.imagen && <p>{errors.imagen.message}</p>}
            </Form.Group>
            <Form.Group>
              <Form.Label>Tipo:</Form.Label>
              <Form.Control
                value={cancha.tipo_cancha}
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
                value={cancha.precio_cancha}
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
            <button type="submit" className="admin-button-editar mt-3">
              Editar cancha
              <FontAwesomeIcon icon={faPenToSquare} className="icon-admin" />
            </button>
          </Form>
        </>
      )}
    </div>
  );
};

export default CanchasEditar;
