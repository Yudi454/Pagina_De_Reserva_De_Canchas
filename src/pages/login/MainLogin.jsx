import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "../../css/login/login.css";
import { useStore } from "../../store/AuthStore";

const MainLogin = ({ usuario, setUsuario, onLoginSubmit }) => {
  const { color } = useStore();

  const {
    register,
    handleSubmit, 
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    
    setUsuario(data); 
    onLoginSubmit(data);
  };

  return (
    <div className={color === "Claro" ? "modo-claro" : "modo-oscuro"}>
      <div className="login-container">
        <Form className="form-login" onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              name="email"
              placeholder="Ingrese un email"
              {...register("email", {
                required: "El email es obligatorio",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "El email no es válido",
                },
              })}
              onChange={(e) =>
                setUsuario({ ...usuario, [e.target.name]: e.target.value })
              }
              isInvalid={!!errors.email}
            />
            {errors.email && (
              <Form.Text className="text-danger">
                {errors.email.message}
              </Form.Text>
            )}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              name="contraseña"
              placeholder="Ingrese una contraseña"
              {...register("contraseña", {
                required: "La contraseña es obligatoria",
                minLength: {
                  value: 6,
                  message: "Mínimo 6 caracteres",
                },
              })}
              onChange={(e) =>
                setUsuario({ ...usuario, [e.target.name]: e.target.value })
              }
              isInvalid={!!errors.contraseña}
            />
            {errors.contraseña && (
              <Form.Text className="text-danger">
                {errors.contraseña.message}
              </Form.Text>
            )}
          </Form.Group>

          <button className="boton-login" type="submit">
            Iniciar Sesión
          </button>
        </Form>
      </div>
    </div>
  );
};


export default MainLogin;
