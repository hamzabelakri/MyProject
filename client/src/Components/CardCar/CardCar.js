import React from "react";
import { Card,  Button} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getOneProduct } from "../../Redux/Actions/ProductAction";
import { useDispatch } from "react-redux";
import "./CardCar.css"

function Cardcar({ product }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = () => {
     dispatch (getOneProduct(product._id, navigate))  
    
  };
  return (
    <Card class="card"   style={{ width: "18rem" }}>
      <Card.Img 
        variant="top"
        style={{ width: "100%", height: "15vw", objectFit: "cover" }}
        src={product.image}
      />
      <Card.Body>
        <Card.Title>{product.brand}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Button variant="primary" onClick={handleClick}>
          More Info
        </Button>
      </Card.Body>
    </Card> 



    
  );
}

export default Cardcar;
