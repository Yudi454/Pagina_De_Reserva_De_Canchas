import Footer from "../../components/footer/Footer";
import ContactoRedes from "../../components/main/ContactoRedes";
import Main1 from "../../components/main/main1";
import Main2 from "../../components/main/Main2";
import Servicios from "../../components/main/Servicios";
import { useStore } from "../../store/AuthStore";
import "../../css/home/Home.css";

const MainHome = () => {
  const { color } = useStore();

  return (
    <div className={color === "Claro" ? "modo-claro" : "modo-oscuro"}>
      <div className="home">
        <Main1 />
        <Main2 />
        <Servicios />
        <ContactoRedes />
      </div>
    </div>
  );
};

export default MainHome;
