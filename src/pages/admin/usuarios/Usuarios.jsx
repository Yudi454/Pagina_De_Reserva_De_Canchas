import { Col, Row } from "react-bootstrap";
import MainUsuarios from "./MainUsuarios";
import NavAdmin from "../NavAdmin";
import { useEffect, useState } from "react";
import {
  deleteDato,
  getDato,
  getDatos,
  updateDato,
} from "../../../customHooks/UseApi";
import { URLUSUARIOS } from "../../../routes/Rutas";
import VerDatoAdmin from "../../../components/verDatoAdmin/VerDatoAdmin";
import ClientesEditar from "./UsuariosEditar";
import UsuariosEditar from "./UsuariosEditar";

const Usuarios = () => {
  const [usuarios, setUsuarios] = useState();

  const [usuario, setUsuario] = useState();

  const [mostrarVer, setMostrarVer] = useState(false);

  const [mostrarEditar, setMostrarEditar] = useState(false);

  useEffect(() => {
    getDatos(URLUSUARIOS, setUsuarios);
  }, []);

  const handleVer = (id) => {
    setMostrarVer(true);
    setMostrarEditar(false);
    getDato(URLUSUARIOS, id, setUsuario);
  };

  const handleEditar = (id) => {
    setMostrarVer(false);
    setMostrarEditar(true);
    getDato(URLUSUARIOS, id, setUsuario);
  };

  const handleDelete = (id) => {
    deleteDato(URLUSUARIOS, id, setUsuarios);
  }
  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      updateDato(URLUSUARIOS, usuario, setUsuarios);
      setMostrarEditar(false);
    } catch (error) {}
  };

  return (
    <>
      <Row>
        <Col>
          <NavAdmin />
        </Col>
        <Col>
          <MainUsuarios
            usuarios={usuarios}
            handleVer={handleVer}
            handleEditar={handleEditar}
            handleDelete={handleDelete}
          />
        </Col>
        {mostrarVer && (
          <Col>
            <VerDatoAdmin setMostrarVer={setMostrarVer} dato={usuario} />
          </Col>
        )}
        {mostrarEditar && (
          <Col>
            <UsuariosEditar
              usuario={usuario}
              setUsuario={setUsuario}
              handleSubmit={handleSubmit}
              setMostrarEditar={setMostrarEditar}
            />
          </Col>
        )}
      </Row>
    </>
  );
};

export default Usuarios;
