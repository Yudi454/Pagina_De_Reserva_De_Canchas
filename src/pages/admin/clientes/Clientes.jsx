import { Col, Row } from "react-bootstrap";
import MainClientes from "./MainClientes";
import NavAdmin from "../NavAdmin";
import { useEffect, useState } from "react";
import { getDato, getDatos, updateDato } from "../../../customHooks/UseApi";
import { URLCLIENTES } from "../../../routes/Rutas";
import VerDatoAdmin from "../../../components/verDatoAdmin/VerDatoAdmin";
import ClientesEditar from "./ClientesEditar";

const Clientes = () => {
  const [clientes, setClientes] = useState();

  const [cliente, setCliente] = useState();

  const [mostrarVer, setMostrarVer] = useState(false);

  const [mostrarEditar, setMostrarEditar] = useState(false);

  useEffect(() => {
    getDatos(URLCLIENTES, setClientes);
  }, []);

  const handleVer = (id) => {
    setMostrarVer(true);
    setMostrarEditar(false);
    getDato(URLCLIENTES, id, setCliente);
  };

  const handleEditar = (id) => {
    setMostrarVer(false);
    setMostrarEditar(true);
    getDato(URLCLIENTES, id, setCliente);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateDato(URLCLIENTES, cliente.id, cliente, setClientes);

    console.log("Funciona submit");
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
            url={URLCLIENTES}
            setMostrarVer={setMostrarVer}
            setValor={setCliente}
            setMostrarEditar={setMostrarEditar}
          />
        </Col>
        {mostrarVer && (
          <Col>
            <VerDatoAdmin
              mostrarVer={mostrarVer}
              setMostrarVer={setMostrarVer}
              cliente={cliente}
            />
          </Col>
        )}
        {mostrarEditar && (
          <Col>
            <ClientesEditar
              cliente={cliente}
              setCliente={setCliente}
              handleSubmit={handleSubmit}
            />
          </Col>
        )}
      </Row>
    </>
  );
};

export default Clientes;
