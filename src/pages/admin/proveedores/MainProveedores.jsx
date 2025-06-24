import { Button, Table } from "react-bootstrap";

const MainProveedores = ({
  proveedores,
  handleVer,
  handleEditar,
  handleDelete,
}) => {
  return (
    <>
      <h3>Proveedores</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Telefono</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {proveedores != undefined &&
            proveedores.map((proveedor) => (
              <tr key={proveedor.id}>
                <td>{proveedor.id}</td>
                <td>{proveedor.nombre}</td>
                <td>{proveedor.email}</td>
                <td>{proveedor.telefono}</td>
                <td>
                  <Button onClick={() => handleVer(proveedor.id)}>Ver</Button>
                  <Button onClick={() => handleEditar(proveedor.id)}>
                    Editar
                  </Button>
                  <Button onClick={() => handleDelete(proveedor.id)}>
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

export default MainProveedores;
