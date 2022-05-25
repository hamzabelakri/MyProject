import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts ,searchProduct} from "../../Redux/Actions/ProductAction.js";
import CardCar from "../CardCar/CardCar";
import { Form, FormControl, Button, Spinner } from "react-bootstrap";


function FindCar() {
  const { products } = useSelector((state) => state.ProductReducer);
  const [state,setState]=useState([])
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
    setState(products)
  }, []);

  const [caracter, setCaracter] = useState("");
  const handleChange = (event) => {
     setCaracter(event.target.value); 
     
  };

  

  return (
    <div>
      <Form 
        className="d-flex"
        style={{ width: "400px", margin: "30px auto", textAlign: "center" }}
      >
        <FormControl
          type="text"
          placeholder="Choose a Brand"
          className="me-2"
          aria-label="Search"
          onChange={handleChange}
          value={caracter}
        />
        <Button variant="outline-primary" type='submit' >Search</Button>
      </Form>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          marginTop: "20px",
          flexWrap: "wrap",
        }}
      >
        {state ?
          state.filter(car=>car.brand.toLowerCase().includes(caracter.toLowerCase())).map((elt) => <CardCar key={elt._id} product={elt}  />) : <Spinner animation="border" variant="success" />}
      </div>
    </div>
  );
}

export default FindCar;
