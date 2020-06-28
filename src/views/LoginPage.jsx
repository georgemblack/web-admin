import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { TextField, Button } from "@material-ui/core";

import { fetchAuthToken } from "../store/actions/Auth";

function LoginPage(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  return (
    <>
      <p>Login</p>
      <form>
        <TextField
          size="small"
          label="Username"
          variant="outlined"
          onChange={(event) => setUsername(event.target.value)}
        />
        <TextField
          size="small"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() => dispatch(fetchAuthToken(username, password))}
        >
          Go
        </Button>
      </form>
    </>
  );
}

export default LoginPage;
