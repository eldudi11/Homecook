import { useState } from "react";
import { getApi } from "../api/apiUtils";

const LoginPageComp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [messege, setMessege] = useState();
  const [user, setUser] = useState({});

  function handleClick() {
    getApi("http://localhost:8000/users/login", [username, password]).then(
      (data) => {
        setMessege(data.data.messege);
        setUser(data.data.user);
      }
    );
  }

  return (
    <div>
      <h1>this is login page</h1>

      <label>
        Username:
        <input
          type="text"
          name="username"
          value={username || ""}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={password || ""}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>

      <br />

      <button onClick={handleClick}>login</button>
      <br />
      {messege}
    </div>
  );
};

export default LoginPageComp;
