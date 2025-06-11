import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Cards = () => {
  return (
    <Card style={{ width: "18rem", backgroundColor:"#E5EAF0" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body className="d-flex flex-column align-items-center text-center">
        <Card.Title>Cancha de Tenis</Card.Title>
        <Card.Text>
          Precio: 4000 la Hora
        </Card.Text>
        <Button style={{ backgroundColor: "#45BF55", borderColor: "#FFC04D" }}>Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default Cards;
