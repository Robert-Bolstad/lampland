import React from "react";
import LoginForm from "../components/LoginForm";
import { RiLoginBoxFill } from "react-icons/ri";

const Login = () => {
  return (
    <div className="login">
      <div className="login__wrapper">
        <RiLoginBoxFill className="login__icon" />
        <h1 className="login__heading">Login</h1>
      </div>

      <LoginForm />
    </div>
  );
};

export default Login;
