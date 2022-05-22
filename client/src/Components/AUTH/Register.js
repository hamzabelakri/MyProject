import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../Redux/Actions/authAction.js";
import { useNavigate } from "react-router-dom";
import "./Signin.css";

function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [useInfo, setUserInfo] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    setUserInfo({ ...useInfo, [event.target.name]: event.target.value });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(register(useInfo, navigate));
    setUserInfo({ username: "", email: "", password: "" });
  };
  const handleClick = () => {
    navigate("/auth/sign-in");
  };
  return (
    <div class="form-wrap" onSubmit={onSubmit}>
      <div class="tabs">
        <h3 class="signup-tab">
          <a class="active" href="#signup-tab-content">
            Sign up
          </a>
        </h3>
        <h3 class="login-tab">
          <a href="#login-tab-content" onClick={handleClick}>
            Login
          </a>
        </h3>
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
              onChange={handleChange}
              value={useInfo.username}
              name="username"
            />
            <input
              type="email"
              class="input"
              id="user_email"
              autocomplete="off"
              placeholder="Name@gmail.com"
              onChange={handleChange}
              value={useInfo.email}
              name="email"
            />

            <input
              type="password"
              class="input"
              id="user_pass"
              autocomplete="off"
              placeholder="Password"
              onChange={handleChange}
              value={useInfo.password}
              name="password"
            />
            <input type="submit" class="button" value="Sign Up" />
          </form>
          <div class="help-text">
            <p>
              By signing up, you agree to our
              <a href="#"> Terms of service</a>
            </p>
          </div>
        </div>

        <div class="help-text">
          <p>
            <a href="#">Forget your password?</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
