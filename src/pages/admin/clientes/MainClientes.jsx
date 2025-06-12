import { Table } from "react-bootstrap";

const MainClientes = ({ clientes }) => {
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
          
        </tbody>
      </Table>
    </>
  );
};

export default MainClientes;
