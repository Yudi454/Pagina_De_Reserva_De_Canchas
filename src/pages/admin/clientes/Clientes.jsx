import { Col, Row } from "react-bootstrap";
import MainClientes from "./MainClientes";
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
import ClientesEditar from "./ClientesEditar";

const Clientes = () => {
  const [clientes, setClientes] = useState();

  const [cliente, setCliente] = useState();

  const [mostrarVer, setMostrarVer] = useState(false);

  const [mostrarEditar, setMostrarEditar] = useState(false);

  const API_ROUTE = import.meta.env.VITE_API_URL;

  const RUTA_CLIENTES = `${API_ROUTE}${rutas.clientes}`;

  useEffect(() => {
    getDatos(RUTA_CLIENTES, setClientes);
  }, []);

  const handleVer = (id) => {
    setMostrarVer(true);
    setMostrarEditar(false);
    getDato(`${RUTA_CLIENTES}/${id}`, setCliente);
  };

  const handleEditar = (id) => {
    setMostrarVer(false);
    setMostrarEditar(true);
    getDato(`${RUTA_CLIENTES}/${id}`, setCliente);
  };

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      updateDato(`${RUTA_CLIENTES}/update/${cliente.id_clientes}`, cliente);
      getDatos(RUTA_CLIENTES, setClientes);
      setMostrarEditar(false);
      alert("Cliente actualizado");
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = (id) => {
    deleteDato(`${RUTA_CLIENTES}/delete/${cliente.id_clientes}`);
    getDatos(RUTA_CLIENTES, setClientes);
  };

  return (
    <>
      <Row>
        <Col md={3}>
          <NavAdmin />
        </Col>
        <Col>
          <MainClientes
            clientes={clientes}
            handleVer={handleVer}
            handleEditar={handleEditar}
            handleDelete={handleDelete}
          />
        </Col>
        {mostrarVer && (
          <Col>
            <VerDatoAdmin setMostrarVer={setMostrarVer} dato={cliente} />
          </Col>
        )}
        {mostrarEditar && (
          <Col>
            <ClientesEditar
              cliente={cliente}
              setCliente={setCliente}
              handleSubmit={handleSubmit}
              setMostrarEditar={setMostrarEditar}
            />
          </Col>
        )}
      </Row>
    </>
  );
};

export default Clientes;
