import { Button, Form } from "react-bootstrap";

const CanchasEditar = ({
  cancha,
  setCancha,
  setMostrarEditar,
  handleEditarCancha,
  handleSubmit,
  register,
  errors,
}) => {
  return (
    <>
      <Button onClick={() => setMostrarEditar(false)}>X</Button>
      <h3>Editar</h3>
      {cancha && (
        <Form onSubmit={handleSubmit(handleEditarCancha)}>
          <Form.Group>
            <Form.Label>Imagen</Form.Label>
            <Form.Control
              value={cancha.imagen_cancha}
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
            <Form.Label>Tipo</Form.Label>
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
            <Form.Label>Precio</Form.Label>
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
          <Button type="submit">Editar</Button>
        </Form>
      )}
    </>
  );
};

export default CanchasEditar;
