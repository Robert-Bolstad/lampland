import { useForm } from "react-hook-form";
import { useState, useContext } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router";
import axios from "axios";
import AuthContext from "../context/AuthContext";
import { FaUserAlt } from "react-icons/fa";
import { AiFillUnlock } from "react-icons/ai";
import { authUrl } from "../utils/api";

const schema = yup.object().shape({
  identifier: yup.string().required("Please enter your username"),

  password: yup.string().required("Please enter your password"),
});

const LoginForm = () => {
  const [submitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const [, setAuth] = useContext(AuthContext);
  const history = useHistory();

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    setSubmitting(true);
    setLoginError(null);
    try {
      const response = await axios.post(`${authUrl}`, data);
      setAuth(response.data);
      history.push("/products");
    } catch (error) {
      console.log("error", error);
      setLoginError(error.toString());
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <form className="loginForm" onSubmit={handleSubmit(onSubmit)}>
      {loginError && (
        <div className="loginForm__login-error">
          <h3>Failed to login</h3>
          <p className="loginForm__login-error-message">{loginError}</p>
        </div>
      )}
      <fieldset className="loginForm__fieldset" disabled={submitting}>
        <div className="loginForm__wrapper">
          <div className="loginForm__group">
            <FaUserAlt className="loginForm__icon" />

            <input
              className="loginForm__input"
              type="text"
              placeholder="Username"
              ref={register}
              name="identifier"
            />
          </div>
        </div>
        {errors.identifier && (
          <p className="loginForm__error">{errors.identifier.message}</p>
        )}
        <div className="loginForm__wrapper">
          <div className="loginForm__group">
            <AiFillUnlock className="loginForm__icon" />

            <input
              className="loginForm__input"
              type="password"
              placeholder="Password"
              ref={register}
              name="password"
            />
          </div>
        </div>

        {errors.password && (
          <p className="loginForm__error">{errors.password.message}</p>
        )}

        <button className="loginForm__btn" type="submit">
          {submitting ? "Loggin in..." : "Login"}
        </button>
      </fieldset>
    </form>
  );
};

export default LoginForm;
