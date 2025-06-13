import { Button, Table } from "react-bootstrap";

const MainClientes = ({ clientes, handleVer, url, setMostrar, setValor }) => {
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
          <tr key={cliente.id}>
            <td>{cliente.id}</td>
            <td>{cliente.usuario}</td>
            <td>{cliente.email}</td>
            <td>{cliente.telefono}</td>
            <td>
              <Button onClick={() => handleVer(setMostrar,url,cliente.id,setValor)}>Ver</Button>
              <Button>Editar</Button>
              <Button>Eliminar</Button>
            </td>
          </tr>
          )}
        </tbody>
      </Table>
    </>
  );
};

export default MainClientes;
