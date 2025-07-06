import { Button, Table } from "react-bootstrap";

const MainClientes = ({ clientes, handleVer, handleEditar, handleDelete }) => {
  return (
    <>
      <h3>Clientes</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Usuario</th>
            <th>Email</th>
            <th>Telefono</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {clientes != undefined && clientes.map((cliente) => 
          <tr key={cliente.id_cliente}>
            <td>{cliente.id_cliente}</td>
            <td>{cliente.usuario}</td>
            <td>{cliente.email_cliente}</td>
            <td>{cliente.telefono_cliente}</td>
            <td>
              <Button onClick={() => handleVer(cliente.id_cliente)}>Ver</Button>
              <Button onClick={() => handleEditar(cliente.id_cliente)} >Editar</Button>
              <Button onClick={() => handleDelete(cliente.id_cliente)}>Eliminar</Button>
            </td>
          </tr>
          )}
        </tbody>
      </Table>
    </>
  );
};

export default MainClientes;
