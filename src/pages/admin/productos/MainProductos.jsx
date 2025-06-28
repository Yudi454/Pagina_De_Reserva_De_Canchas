import { Button, Table } from "react-bootstrap";

const MainProductos = ({productos,handleDelete,handleEditar,handleVer}) => {
  return (
    <>
      <h3>productos</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos != undefined &&
            productos.map((producto) => (
              <tr key={producto.id_producto}>
                <td>{producto.id_producto}</td>
                <td>{producto.nombre_producto}</td>
                <td>{producto.precio_producto}</td>
                <td>{producto.stock}</td>
                <td>
                  <Button onClick={() => handleVer(producto.id_producto)}>Ver</Button>
                  <Button onClick={() => handleEditar(producto.id_producto)}>
                    Editar
                  </Button>
                  <Button onClick={() => handleDelete(producto.id_producto)}>
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
};

export default MainProductos;
