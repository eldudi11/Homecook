import { useState } from "react";
import { postApi } from "../api/apiUtils";

const CreateUserPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [messege, setMessege] = useState();
  const [user, setUser] = useState({});

  function handleClick() {
    if (username == "" || name == "" || password == "") {
      messege = "all fields are required to be filled";
      console.log("1 EMPTY");
    } else {
      postApi("http://localhost:8000/users/create", [
        username,
        password,
        name,
      ]).then((data) => {
        //setMessege(data.data.messege);
        console.log(data);
      });
    }
  }

  return (
    <div>
      <h1>this is create user page</h1>

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
      <label>
        nickname:
        <input
          type="text"
          name="name"
          value={name || ""}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <br />

      <button onClick={handleClick}>sign up</button>
      <br />
      {messege}
    </div>
  );
};

export default CreateUserPage;
