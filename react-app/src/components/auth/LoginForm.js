import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../store/session";
import LoginGeneral from "./LogIn/LoginGeneral";

import "./LoginLogout.css";

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [credential, setCredential] = useState("");
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/channels/1" />;
  }

  return (
    <>
      <LoginGeneral />
      <form onSubmit={onLogin} className="user-form ">
        <div>
          {errors.map((error, ind) => (
            <span key={ind}>{error}</span>
          ))}
        </div>
        <div className="user-form-inputs-div">
          {/* <label htmlFor='email'>Email</label> */}
          <input
            name="email"
            type="text"
            placeholder="Email"
            value={email}
            onChange={updateEmail}
          />
        </div>
        <div className="user-form-inputs-div">
          {/* <label htmlFor='password'>Password</label> */}
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={updatePassword}
          />
        </div>
        <div className="user-form-button-div">
          <button type="submit">Login</button>
        </div>

        <div className="user-form-button-div">
        <button
            id='demoUser'
            type='submit'
            onClick={() => {
              setCredential('demo1@aa.io')
              setPassword('password')
            }}
          >
            Demo Login
          </button>
          </div>
      </form>
    </>
  );
};

export default LoginForm;
