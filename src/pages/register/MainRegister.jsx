import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "../../css/register/Register.css";
import { useStore } from "../../store/AuthStore";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const MainRegister = ({ usuario, setUsuario, onRegisterSubmit }) => {
  const { color } = useStore();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setUsuario(data);
    onRegisterSubmit(data);
    reset();
    
  };

  return (
    <div className={color === "Claro" ? "modo-claro" : "modo-oscuro"}>
        <Link to="/" className="volver-atras">
          <FaArrowLeft style={{ marginRight: "8px" }} />
          Volver al inicio
        </Link>
      <div className="register-contenedor">
        <h3 className="register-titulo">
          "Gracias por registrarte, completá tus datos y empezá a disfrutar"
        </h3>
        <Form className="form-register" onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3">
            <Form.Label>Usuario</Form.Label>
            <Form.Control
              name="usuario"
              placeholder="Ingrese un nombre de usuario"
              {...register("usuario", {
                required: "El nombre de usuario es obligatorio",
                minLength: {
                  value: 3,
                  message: "Debe tener al menos 3 caracteres",
                },
              })}
              onChange={(e) =>
                setUsuario({ ...usuario, [e.target.name]: e.target.value })
              }
              isInvalid={!!errors.usuario}
            />
            {errors.usuario && (
              <Form.Text className="text-danger">
                {errors.usuario.message}
              </Form.Text>
            )}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              name="email"
              placeholder="Ingrese un email"
              {...register("email", {
                required: "El email es obligatorio",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Formato de email inválido",
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
            <Form.Label>Teléfono</Form.Label>
            <Form.Control
              name="telefono"
              placeholder="Ingrese un número de teléfono"
              {...register("telefono", {
                required: "El teléfono es obligatorio",
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Solo se permiten números",
                },
                minLength: {
                  value: 6,
                  message: "Debe tener al menos 6 dígitos",
                },
              })}
              onChange={(e) =>
                setUsuario({ ...usuario, [e.target.name]: e.target.value })
              }
              isInvalid={!!errors.telefono}
            />
            {errors.telefono && (
              <Form.Text className="text-danger">
                {errors.telefono.message}
              </Form.Text>
            )}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              name="contraseña"
              placeholder="Ingrese una contraseña minimo 6 caracteres"
              {...register("contraseña", {
                required: "La contraseña es obligatoria",
                minLength: {
                  value: 6,
                  message: "Debe tener al menos 6 caracteres",
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

          <button className="boton-register" type="submit">
            Registrarse
          </button>
        </Form>
      </div>
    </div>
  );
};

export default MainRegister;
