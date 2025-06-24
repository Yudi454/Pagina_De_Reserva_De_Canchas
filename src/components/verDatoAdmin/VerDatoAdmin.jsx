import { Button, Form } from "react-bootstrap";

const VerDatoAdmin = ({ dato,setMostrarVer }) => {
  return (
    <>
    <Button onClick={() => setMostrarVer(false)}>X</Button>
      {dato != null &&
        Object.keys(dato).map((atributo, i) => (
          <Form.Group key={i} className="mb-3" controlId="formBasicEmail">
            <Form.Label>{atributo}</Form.Label>
            <Form.Control value={dato[atributo]} disabled />
          </Form.Group>
        ))}
    </>
  );
};

export default VerDatoAdmin;
