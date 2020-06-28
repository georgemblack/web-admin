import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { fetchAuthToken } from "../store/actions/Auth";

function LoginPage(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event => {
    dispatch(fetchAuthToken(username, password))
    event.preventDefault()
  })

  return (
    <>
      <p>Login</p>
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

export default LoginPage;
