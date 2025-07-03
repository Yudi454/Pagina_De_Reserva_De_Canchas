import { useState } from "react";
import "../../css/home/main2.css";

const images = [
  "/canchafutbol.jpg",
  "/canchabasquet.jpg",
  "/canchapadle.jpg",
  "/canchatenis.jpg",

];

const Main2 = () => {
  const [current, setCurrent] = useState(0);
  const total = images.length;

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  return (
    <>
    <div>
      <br />
      <h2 className="carousel-title my-5">Nuestras Canchas</h2>
      <br />
      <div className="carousel">
      <button className="carousel-btn left" onClick={prevSlide}>
        ❮
      </button>
      <img src={images[current]} alt={`Imagen ${current + 1}`} />
      <button className="carousel-btn right" onClick={nextSlide}>
        ❯
      </button>
    </div>
    </div>
    <br />
    <br />
    <br />
    </>
  );
};

export default Main2;
