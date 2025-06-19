import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Cards = ({tipo_cancha,precio_cancha}) => {
  return (
    <Card style={{ width: "18rem", backgroundColor:"#E5EAF0" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body className="d-flex flex-column align-items-center text-center">
        <Card.Title>{tipo_cancha}</Card.Title>
        <Card.Text>
          Precio: ${precio_cancha}
        </Card.Text>
        <Link to="/reservar-Cancha/InfoCancha">
        <Button style={{ backgroundColor: "#45BF55", borderColor: "#FFC04D" }}>Reservar</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Cards;
