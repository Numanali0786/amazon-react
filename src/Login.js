import React, { useState } from "react";
import "./Login.css";
import { auth } from "./firebase";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { useAppContext } from "./context/Context";
// import { useUserContext } from "./context/userContext";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useNavigate();

  // const { user, dispatch } = useUserContext();
  const { user, dispatch } = useAppContext();
  console.log(user);
  const handleLogin = (e) => {
    // e.preventDefault();
    // console.log(email);
    // auth
    //   .signInWithEmailAndPassword(email, password)
    //   .then((user) => {
    //     console.log(user);
    //   })
    //   .catch((error) => alert(error.message));
  };
  const handleSignup = (e) => {
    // e.preventDefault();
    // console.log(email);
    // auth
    //   .createUserWithEmailAndPassword(email, password)
    //   .then((user) => {
    //     console.log(user);
    //   })
    //   .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__in">
        <Link to="/">
          <div className="login__logo">
            <img
              className="login__img"
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsJCQcJCQcJCQkJCwkJCQkJCQsJCwsMCwsLDA0QDBEODQ4MEhkSJRodJR0ZHxwpKRYlNzU2GioyPi0pMBk7IRP/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCADqAO0DASIAAhEBAxEB/8QAHAABAAIDAQEBAAAAAAAAAAAAAAYHAQUIBAMC/8QASxAAAQQBAgIFBggKCAYDAAAAAQACAwQRBQYSIQcTMUFRIjJhcZGhFBU2QnKBsbQXIzRic3R1grKzFjM1Q0RSosEkVJKU0dJTY8L/xAAZAQEBAAMBAAAAAAAAAAAAAAAABAECBQP/xAAtEQEAAQMCBAQFBQEAAAAAAAAAAQIDBAUREiFCcRMxgZFBYaHB8BUjUmLR4f/aAAwDAQACEQMRAD8AttERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREGh3JubT9t1I5p2ums2C5lSrG4NdKW4LnOcQcMGRk4PaBgk4VV39+7wuucWXW04ieUVGNjA0fpJA6T/UPUFvd7bc3jquuWblXT3WaMcFaCmYbFYOEbWcbwY5XtdniLu7w+r97L2O17rl7cmmu4opWw0ad0NMfJuXzyRtcWnt4W55cicc8gIjDu3eELw+PW7ziDnEz2TMOPFsrXD3KdbT6QJtQt19L1pkTZ7DhFUuQt4GSynsimjyQHO+aRyJ5YGef735tnQYdFsapSo1qdmlJWJNSJsLZYpZWwlj2RgNOOIEHGeXp51P1j4S2ZhLXwuZPGR2tfG4SNPtCDptUva6Qt4stXGRz02xss2GMYKjCGsbI5oGXEn3q52niax3+YNd7ea5rufld/9btfzXILDtdIepwaDogY2vJrl6tJYtTFg6mvH18kUbhEDjjcG5xnA7ceUAYy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"
              alt=""
            />
          </div>
        </Link>
        <form action="" className="form">
          <span>Sign In</span>
          <label htmlFor="email" className="login__label">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="login__input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password" className="login__label">
            Password
          </label>
          <input
            type="pasword"
            id="password"
            className="login__input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login__btn" onClick={handleLogin}>
            Sign In
          </button>
          <div className="login__newtoAmazon">
            <div className="line__left"></div>
            <div className="line__text">New to Amazon?</div>
            <div className="line__right"></div>
          </div>
          <button className="signup__btn" onClick={handleSignup}>
            Create an Account
          </button>
          {/* <div className="google__btn"> */}
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              const userDetails = jwt_decode(credentialResponse.credential);
              dispatch({ type: "LOGIN", payload: userDetails });
              history("/");
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
          {/* </div> */}

          <p className="t_and_c">
            By signing in you are agreeing to our{" "}
            <span className="blue__text">Term</span> and{" "}
            <span className="blue__text">Condition</span>.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
