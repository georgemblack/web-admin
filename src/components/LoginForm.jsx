import { useContext, useState } from "react";

import GlobalContext from "../context/GlobalContext";
import { postAuthTokenAPI } from "../data/Api";

function LoginForm(props) {
  const context = useContext(GlobalContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = await postAuthTokenAPI(username, password);

    // set token in local storage
    window.localStorage.setItem("token", token);

    // set token in global context
    context.authenticateUser(token);
  };

  return (
    <div className="login">
      <h1>Login</h1>
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
    </div>
  );
}

export default LoginForm;
