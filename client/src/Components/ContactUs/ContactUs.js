import React, { useState }from "react";
import { Button, Form, } from "react-bootstrap";
import axios from "axios";


function ContactUs() {
  const [contact,setContact]=useState({Name:'',Email:"",message:''});
  const handleChange=(event)=>{
     setContact({...contact,[event.target.id]:event.target.value})
  }
  

    const onSubmit = async(event) => {
        event.preventDefault();
        try {
         const res= await axios.post('http://localhost:2000/message',contact)
          console.log(res)
        } catch (error) {
          alert('something wrong')
        }
        
      };

  return (
    

  <div class="form-wrap" style = {{width: "550px"}}onSubmit={onSubmit}>
  <div class="tabs">
    
    
  </div>

  <div class="tabs-content">
    <div id="signup-tab-content" class="active">
      <form class="signup-form" action="" method="post">
        <input onChange={handleChange}
          class="input"
          id="Name"
          autocomplete="off"
          placeholder="Name"
          type="text"
          
          name="username"
        />
        <input onChange={handleChange}
          type="email"
          class="input"
          id="Email"
          autocomplete="off"
          placeholder="Name@gmail.com"
          name="email"
        />

        <textarea
          type="textarea"
          class="input"
          id="message"
          autocomplete="off"
          placeholder="Enter your message"
          rows="3"
          name="message"
        />
        <input onChange={handleChange} type="submit" class="button" value="Send" style = {{width: "80%", margin: "auto 50px"}}/>
      </form>
    </div>


  </div>
</div>
  )
}

export default ContactUs;
