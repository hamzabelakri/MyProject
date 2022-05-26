import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";
import {  Button } from "react-bootstrap";


function NotFound() {
  return (
    <section  style={{ marginTop: "20px", height:"35vw" }}class="page_404">
      <div class="container">
        <div style={{ margin: "0 auto" }} class="contant_box_404">
          <h1 class="text-center ">404</h1>
          <h3 class="h2">Look like you're lost</h3>

          <p>the page you are looking for isn't avaible!</p>

          <Button style={{ marginLeft: "100px" }} variant="primary" type="submit">
          <Link style={{ color: "white"}} to="/" >Go Home</Link>
          </Button>
          
          
        </div>
      </div>
    </section>
  );
}

export default NotFound;
