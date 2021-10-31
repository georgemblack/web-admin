import { useContext, useState } from "react";

import GlobalContext from "../context/GlobalContext";
import { postAuthTokenAPI } from "../data/Api";

function LoginForm(props) {
  const context = useContext(GlobalContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await postAuthTokenAPI(username, password);

    // set token in local storage
    window.localStorage.setItem("token", response.token);

    // set token in global context
    context.authenticateUser(response.token);
  };

  return (
    <div className="login">
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
