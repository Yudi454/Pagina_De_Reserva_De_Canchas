import { Button, Form } from "react-bootstrap";
import "../../css/register/Register.css"
import { useStore } from "../../store/AuthStore";




const MainRegister = ({ usuario, setUsuario, handleSubmit }) => {

  const { color} = useStore();

  return (
    <>
      <div className={color === 'Claro' ? 'modo-claro' : 'modo-oscuro'}>
        <div className=" register-contenedor">
        <Form className="form-register" onSubmit={(e) => handleSubmit(e)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Usuario</Form.Label>
            <Form.Control
              name="usuario"
              onChange={(e) =>
                setUsuario({ ...usuario, [e.target.name]: e.target.value })
              }
              placeholder="Ingrese un nombre de usuario"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              name="email"
              onChange={(e) =>
                setUsuario({ ...usuario, [e.target.name]: e.target.value })
              }
              placeholder="Ingrese un email"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Telefono</Form.Label>
            <Form.Control
              name="telefono"
              onChange={(e) =>
                setUsuario({ ...usuario, [e.target.name]: e.target.value })
              }
              placeholder="Ingrese un numero de telefono"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              name="contraseña"
              onChange={(e) =>
                setUsuario({ ...usuario, [e.target.name]: e.target.value })
              }
              placeholder="Ingrese una contraseña"
            />
          </Form.Group>
          <button className="boton-register" type="submit">Registrarse</button>
        </Form>
      </div>
      </div>
    </>
  );
};

export default MainRegister;
