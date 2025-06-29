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
          <tr key={cliente.id_clientes}>
            <td>{cliente.id_clientes}</td>
            <td>{cliente.usuario}</td>
            <td>{cliente.email_cliente}</td>
            <td>{cliente.telefono_cliente}</td>
            <td>
              <Button onClick={() => handleVer(cliente.id_clientes)}>Ver</Button>
              <Button onClick={() => handleEditar(cliente.id_clientes)} >Editar</Button>
              <Button onClick={() => handleDelete(cliente.id_clientes)}>Eliminar</Button>
            </td>
          </tr>
          )}
        </tbody>
      </Table>
    </>
  );
};

export default MainClientes;
