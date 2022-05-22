import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../Redux/Actions/ProductAction.js";
import CardCar from "../CardCar/CardCar";
import { Form, FormControl, Button, Spinner } from "react-bootstrap";


function FindCar(onSearch) {
  const { products } = useSelector((state) => state.ProductReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  const [caracter, setCaracter] = useState("");
  const handleChange = (event) => {
    setCaracter(event.target.value);
  };

  const   onSubmit=(event)=>{
    event.preventDefault()
    onSearch(caracter)
  };

  return (
    <div>
      <Form onSubmit={onSubmit}
        className="d-flex"
        style={{ width: "400px", margin: "30px auto", textAlign: "center" }}
      >
        <FormControl
          type="search"
          placeholder="Choose a Brand"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-primary" onChange={handleChange}>Search</Button>
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
        {products ?
          products.map((elt) => <CardCar key={elt._id} product={elt}  />) : <Spinner animation="border" variant="success" />}
      </div>
    </div>
  );
}

export default FindCar;
