import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { postAuthToken } from "../store/actions/Auth";

function LoginForm(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    dispatch(postAuthToken(username, password));
    event.preventDefault();
  };

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="username"
          placeholder="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          type="password"
          autoComplete="password"
          placeholder="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default LoginForm;
