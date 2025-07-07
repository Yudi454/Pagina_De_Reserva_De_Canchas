import { faEye, faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  Table } from "react-bootstrap";

const MainClientes = ({ clientes, handleVer, handleEditar, handleDelete }) => {
  return (
    <>
      <h3>Clientes</h3>
      <div className="container-table">
        <Table striped bordered hover className="table-admin" >
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
            {clientes != undefined &&
              clientes.map((cliente) => (
                <tr key={cliente.id_cliente} className="tr-admin">
                  <td>{cliente.id_cliente}</td>
                  <td>{cliente.usuario}</td>
                  <td>{cliente.email_cliente}</td>
                  <td>{cliente.telefono_cliente}</td>
                  <td>
                    <button className="admin-button" onClick={() => handleVer(cliente.id_cliente)}>
                      Ver <FontAwesomeIcon icon={faEye} className="icon-admin" />
                    </button>
                    <button className="admin-button-editar" onClick={() => handleEditar(cliente.id_cliente)}>
                      Editar <FontAwesomeIcon icon={faPenToSquare} className="icon-admin" />
                    </button>
                    <button className="admin-button-delete" onClick={() => handleDelete(cliente.id_cliente)}>
                      Eliminar <FontAwesomeIcon icon={faTrash} className="icon-admin" />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default MainClientes;
