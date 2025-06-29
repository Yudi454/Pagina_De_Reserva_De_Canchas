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
import { rutas } from "../../../routes/Rutas";
import VerDatoAdmin from "../../../components/verDatoAdmin/VerDatoAdmin";
import UsuariosEditar from "./UsuariosEditar";

const Usuarios = () => {
  const [usuarios, setUsuarios] = useState();

  const [usuario, setUsuario] = useState();

  const [mostrarVer, setMostrarVer] = useState(false);

  const [mostrarEditar, setMostrarEditar] = useState(false);

  const API_ROUTE = import.meta.env.VITE_API_URL;

  const RUTA_USUARIOS = `${API_ROUTE}${rutas.usuarios}`;

  useEffect(() => {
    getDatos(RUTA_USUARIOS, setUsuarios);
  }, []);

  const handleVer = (id) => {
    setMostrarVer(true);
    setMostrarEditar(false);
    getDato(`${RUTA_USUARIOS}/${id}`, setUsuario);
  };

  const handleEditar = (id) => {
    setMostrarVer(false);
    setMostrarEditar(true);
    getDato(`${RUTA_USUARIOS}/${id}`, setUsuario);
  };

  const handleDelete = (id) => {
    deleteDato(`${RUTA_USUARIOS}/delete/${id}`);
    getDatos(RUTA_USUARIOS, setUsuarios);
  };
  
  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      console.log(usuario);
      
      updateDato(`${RUTA_USUARIOS}/update/${usuario.id_usuario}`, usuario);
      getDatos(RUTA_USUARIOS, setUsuarios);
      alert("Usuario actualizado");
      setMostrarEditar(false);
    } catch (error) {
      console.log(error);
    }
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
