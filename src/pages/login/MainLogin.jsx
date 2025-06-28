import { Button, Form } from "react-bootstrap";

const MainLogin = ({ usuario, setUsuario, handleSubmit }) => {
  return (
    <>
    <div className=" d-flex justify-content-center">
      <Form className="col-6 col-md-3" onSubmit={(e) => handleSubmit(e)}>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            name="email"
            onChange={(e) =>
              setUsuario({ ...usuario, [e.target.name]: e.target.value })
            }
            placeholder="Ingrese un email"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            name="contraseña"
            onChange={(e) =>
              setUsuario({ ...usuario, [e.target.name]: e.target.value })
            }
            placeholder="Ingrese una contraseña"
          />
        </Form.Group>
        <Button type="submit">Inicia Sesión</Button>
      </Form>
    </div>
    </>
  );
};

export default MainLogin;
