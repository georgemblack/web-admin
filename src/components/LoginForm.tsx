import { useContext, useState } from "react";

import { postAuthTokenAPI } from "../data/Api";
import GlobalContext from "../context/GlobalContext";
import IGlobalContext from "../context/IGlobalContext";

function LoginForm() {
  const context = useContext(GlobalContext) as IGlobalContext;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const response = await postAuthTokenAPI(username, password);

    // set token in local storage
    window.localStorage.setItem("token", response.token);

    // set token in global context
    context.authenticateUser(response.token);
  };

  return (
    <div className="mx-auto max-w-xs">
      <h2 className="mt-4 text-center text-2xl">Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="username"
          placeholder="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          className="mt-2 w-full appearance-none rounded-full border-2 border-gray-200 bg-gray-200 px-4 py-2 leading-tight text-gray-700 focus:border-blue-500 focus:bg-white focus:outline-none"
        />
        <input
          type="password"
          autoComplete="password"
          placeholder="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="mt-2 w-full appearance-none rounded-full border-2 border-gray-200 bg-gray-200 px-4 py-2 leading-tight text-gray-700 focus:border-blue-500 focus:bg-white focus:outline-none"
        />
        <button
          type="submit"
          className="mx-auto mt-2 block rounded-full bg-blue-500 px-4 py-2 hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
