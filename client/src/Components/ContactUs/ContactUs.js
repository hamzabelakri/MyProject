import React from "react";
import { Button, Form, } from "react-bootstrap";

function ContactUs() {

    const onSubmit = (event) => {
        event.preventDefault();
        alert ("We'll get back to you within 24-48 hours");
      };

  return (
    /* <div>
      <Form style={{ width: "40%", margin: "auto" }} onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Enter your message here</Form.Label>
    <Form.Control as="textarea" rows={2} />
  </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  ); */

  <div class="form-wrap" style = {{width: "550px"}}onSubmit={onSubmit}>
  <div class="tabs">
    
    
  </div>

  <div class="tabs-content">
    <div id="signup-tab-content" class="active">
      <form class="signup-form" action="" method="post">
        <input
          class="input"
          id="user_name"
          autocomplete="off"
          placeholder="Name"
          type="text"
          
          name="username"
        />
        <input
          type="email"
          class="input"
          id="user_email"
          autocomplete="off"
          placeholder="Name@gmail.com"
          name="email"
        />

        <textarea
          type="textarea"
          class="input"
          id="user_pass"
          autocomplete="off"
          placeholder="Enter your message"
          rows="3"
          name="message"
        />
        <input type="submit" class="button" value="Send" style = {{width: "80%", margin: "auto 50px"}}/>
      </form>
    </div>


  </div>
</div>
  )
}

export default ContactUs;
