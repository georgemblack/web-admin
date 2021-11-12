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
    <div className="max-w-xs mx-auto">
      <h2 className="mt-4 text-2xl text-center">Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="username"
          placeholder="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          className="w-full px-4 py-2 mt-2 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded-full appearance-none focus:outline-none focus:bg-white focus:border-blue-500"
        />
        <input
          type="password"
          autoComplete="password"
          placeholder="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="w-full px-4 py-2 mt-2 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded-full appearance-none focus:outline-none focus:bg-white focus:border-blue-500"
        />
        <button
          type="submit"
          className="block px-4 py-2 mx-auto mt-2 bg-blue-500 rounded-full hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
