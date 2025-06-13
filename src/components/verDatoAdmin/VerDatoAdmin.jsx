import { Form } from "react-bootstrap";

const VerDatoAdmin = ({ cliente }) => {
  console.log(cliente);

  return (
    <>
      {cliente != null &&
        Object.keys(cliente).map((atributo, i) => (
          <Form.Group key={i} className="mb-3" controlId="formBasicEmail">
            <Form.Label>{atributo}</Form.Label>
            <Form.Control value={cliente[atributo]} disabled />
          </Form.Group>
        ))}
    </>
  );
};

export default VerDatoAdmin;
