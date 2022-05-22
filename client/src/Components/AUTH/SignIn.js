import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../Redux/Actions/authAction.js";
function SignIn() {
  const dispatch = useDispatch();
  const [useInfo, setUserInfo] = useState({ email: "", password: "" });
  const handleChange = (event) => {
    setUserInfo({ ...useInfo, [event.target.name]: event.target.value });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(login(useInfo, navigate));
    setUserInfo({ email: "", password: "" });
  };

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/auth/register");
  };
  return (
    <div class="form-wrap" onSubmit={onSubmit}>
      <div class="tabs">
        <h3 class="signup-tab">
          <a class="active" href="#signup-tab-content">
            Login
          </a>
        </h3>
        <h3 class="login-tab">
          <a href="#login-tab-content" onClick={handleClick}>
            Sing up
          </a>
        </h3>
      </div>
      <div class="tabs-content">
        <div id="login-tab-content" class="active">
          <form class="login-form" action="" method="post">
            <input
              class="input"
              id="user_login"
              autocomplete="off"
              onChange={handleChange}
              type="email"
              value={useInfo.email}
              placeholder="name@example.com"
              name="email"
            />
            <input
              class="input"
              id="user_pass"
              autocomplete="off"
              onChange={handleChange}
              type="password"
              value={useInfo.password}
              placeholder="name@example.com"
              name="password"
            />
            <input type="checkbox" class="checkbox" id="remember_me" />
            <label for="remember_me">Remember me</label>

            <input type="submit" class="button" value="Login" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
