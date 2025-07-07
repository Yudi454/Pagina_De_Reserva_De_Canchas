import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Form } from "react-bootstrap";
import "../../css/admin/Admin.css"

const VerDatoAdmin = ({ dato, setMostrarVer }) => {
  return (
    <div className="d-flex flex-column align-items-center">
      <Button className="admin-button" onClick={() => setMostrarVer(false)}>
        <FontAwesomeIcon icon={faTimes} size="lg" />
      </Button>
      {dato && dato.imagen && (
        <img src={dato.imagen} className="img-fluid w-50 mt-3 mb-3" />
      )}
      {dato != null &&
        Object.keys(dato).map((atributo, i) => (
          <Form.Group key={i} className="mb-3" controlId="formBasicEmail">
            <Form.Label>{atributo}:</Form.Label>
            <Form.Control value={dato[atributo]} disabled />
          </Form.Group>
        ))}
    </div>
  );
};

export default VerDatoAdmin;
