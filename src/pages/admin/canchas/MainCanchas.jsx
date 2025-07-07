import { faEye, faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  Table } from "react-bootstrap";
import { useStore } from "../../../store/AuthStore";

const MainCanchas = ({ canchas, handleEditar, handleVer, handleDelete }) => {

  const { color } = useStore();

  return (
    <>
      <div className={color === "Claro" ? "modo-claro" : "modo-oscuro"}>
        <h3>Canchas</h3>
      <div className="container-table">
        <Table striped bordered hover className="table-admin">
          <thead>
            <tr>
              <th>Id</th>
              <th>Imagen</th>
              <th>Tipo</th>
              <th>Precio</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {canchas != undefined &&
              canchas.map((cancha) => (
                <tr key={cancha.id_cancha} className="tr-admin">
                  <td>{cancha.id_cancha}</td>
                  <td><img src={cancha.imagen_cancha} className="img-fluid" style={{ maxWidth: "120px" }} /></td>
                  <td>{cancha.tipo_cancha}</td>
                  <td>{cancha.precio_cancha}</td>
                  <td>
                    <button className="admin-button" onClick={() => handleVer(cancha.id_cancha)}>
                      Ver
                      <FontAwesomeIcon icon={faEye} className="icon-admin" />
                    </button>
                    <button className="admin-button-editar" onClick={() => handleEditar(cancha.id_cancha)}>
                      Editar
                      <FontAwesomeIcon
                        icon={faPenToSquare}
                        className="icon-admin"
                      />
                    </button>
                    <button className="admin-button-delete" onClick={() => handleDelete(cancha.id_cancha)}>
                      Eliminar
                      <FontAwesomeIcon icon={faTrash} className="icon-admin" />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
      </div>
    </>
  );
};

export default MainCanchas;
