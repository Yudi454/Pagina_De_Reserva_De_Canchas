import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Error404 from "./pages/error404/Error404";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import InfoUsuario from "./pages/info_usuario/InfoUsuario";
import InfoCancha from "./pages/infoCancha/InfoCancha";
import Reservar from "./pages/reservar/Reservar";
import MisReservas from "./pages/mis_reservas/MisReservas";
import Caja from "./pages/admin/caja/Caja";
import Clientes from "./pages/admin/clientes/Clientes";
import Horarios from "./pages/admin/horarios/Horarios";
import Productos from "./pages/admin/productos/Productos";
import Proveedores from "./pages/admin/proveedores/Proveedores";
import Reservas from "./pages/admin/reservas/Reservas";
import Usuarios from "./pages/admin/usuarios/Usuarios";
import Ventas from "./pages/admin/ventas/Ventas";
import Admin from "./pages/admin/Admin";
import Canchas from "./pages/admin/canchas/Canchas";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import NavBar from "./components/header/NavBar";
import { useStore } from "./store/AuthStore";

function App() {
  const user = useStore((state) => state.user);
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error404 />} />
          <Route
            path="/reservar-Cancha/InfoCancha/:id"
            element={<InfoCancha />}
          />
          {user === null && (
            <>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </>
          )}
          {user && user.rol === undefined && (
            <>
              <Route path="/reservar-Cancha" element={<Reservar />} />

              <Route path="/mis-reservas" element={<MisReservas />} />
            </>
          )}
          {user && user.rol === "empleado" && (
            <>
              <Route path="/admin" element={<Admin />} />
              <Route path="/admin/caja" element={<Caja />} />
            </>
          )}
          {user && user.rol === "admin" && (
            <>
              <Route path="/admin/reservas" element={<Reservas />} />
              <Route path="/admin/clientes" element={<Clientes />} />
              <Route path="/admin/horarios" element={<Horarios />} />
              <Route path="/admin/productos" element={<Productos />} />
              <Route path="/admin/proveedores" element={<Proveedores />} />
              <Route path="/admin/usuarios" element={<Usuarios />} />
              <Route path="/admin/ventas" element={<Ventas />} />
              <Route path="/admin/canchas" element={<Canchas />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/admin/caja" element={<Caja />} />
            </>
          )}
        </Routes>
        <Footer />
      </BrowserRouter>
      <ToastContainer position="bottom-left" autoClose={3000} />
    </>
  );
}

export default App;