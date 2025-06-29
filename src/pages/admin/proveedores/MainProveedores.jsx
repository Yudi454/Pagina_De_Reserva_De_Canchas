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
              <tr key={proveedor.id_proveedor}>
                <td>{proveedor.id_proveedor}</td>
                <td>{proveedor.nombre_proveedor}</td>
                <td>{proveedor.email_proveedor}</td>
                <td>{proveedor.telefono_proveedor}</td>
                <td>
                  <Button onClick={() => handleVer(proveedor.id_proveedor)}>Ver</Button>
                  <Button onClick={() => handleEditar(proveedor.id_proveedor)}>
                    Editar
                  </Button>
                  <Button onClick={() => handleDelete(proveedor.id_proveedor)}>
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
