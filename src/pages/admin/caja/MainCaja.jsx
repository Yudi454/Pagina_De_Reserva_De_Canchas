import { Button, Form } from "react-bootstrap";

const MainCaja = ({
  producto,
  productos,
  register,
  errors,
  setProducto,
  handleBuscar,
  handleSubmit,
  handleCrear
}) => {
  return (
    <>
      <Form onSubmit={handleSubmit(handleCrear)}>
        <Form.Group>
          <Form.Label>Nombre del producto</Form.Label>
          <Form.Control
            list="productosSimilares"
            name="nombre_producto"
            {...register("nombre_producto", {
              required: "El nombre es obligatorio",
            })}
            onChange={(e) => {
              if (productos) {
                const productoSeleccionado = productos.find(
                  (p) => p.nombre_producto === e.target.value
                );
                setProducto({
                  ...producto,
                  nombre_producto: productoSeleccionado.nombre_producto,
                  id_producto: productoSeleccionado.id_producto,
                  precio_producto: productoSeleccionado.precio_producto,
                });
              } else {
                setProducto({
                  ...producto,
                  [e.target.name]: e.target.value,
                });
              }
            }}
          />
          <datalist id="productosSimilares">
            {productos &&
              productos.map((producto) => (
                <option
                  key={producto.id_producto}
                  value={producto.nombre_producto}
                />
              ))}
          </datalist>
          <Button onClick={handleBuscar}>Buscar Producto</Button>
        </Form.Group>
        <Form.Group>
          <Form.Label>Ingresar cantidad</Form.Label>
          <Form.Control 
          name="cantidad"
          {...register("cantidad",{
            required: "La cantidad es obligatoria"
          })}
          onChange={(e) => setProducto({...producto, [e.target.name] : e.target.value})}
          />
        </Form.Group>
        <Button type="submit">Agregar al carrito</Button>
      </Form>
    </>
  );
};

export default MainCaja;
