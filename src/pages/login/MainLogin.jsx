import { Button, Form } from "react-bootstrap";
import "../../css/login/login.css";
import { useStore } from "../../store/AuthStore";

const MainLogin = ({ usuario, setUsuario, handleSubmit }) => {
  const { color } = useStore();

  return (
    <>
      <div className={color === 'Claro' ? 'modo-claro' : 'modo-oscuro'}>
        <div className="login-container">
          <br />
          <br />
          <Form className="form-login" onSubmit={(e) => handleSubmit(e)}>
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
            <button className="boton-login" type="submit">Iniciar Sesión</button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default MainLogin;
