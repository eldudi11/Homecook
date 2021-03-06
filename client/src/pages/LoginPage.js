import { useState, useEffect } from "react";
import { getApi } from "../api/apiUtils";
import ActionButton from "../styles/ActionButton";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { DEFINE_CURRNET_USER } from "../store/actions/usersAction";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

// import { set } from "lodash";
const LoginPageComp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [messege, setMessege] = useState("");
  const [user, setUser] = useState({});

  const navigate = useNavigate();
  const dispatcher = useDispatch();

  function handleClick() {
    getApi("http://localhost:8000/users/login", [username, password]).then(
      (data) => {
        console.log(data.data.messege);
        setMessege(data.data.messege);
        if (data.data.messege == "OK") {
          dispatcher({ type: DEFINE_CURRNET_USER, payload: data.data.user });
          navigate("/", { replace: true });
        }
      }
    );
  }

  // useEffect(() => {
  //   if (messege == true) {
  //     console.log("im in messeege");
  //     dispatcher({ type: DEFINE_CURRNET_USER, payload: user });
  //     //console.log(user.Name + " is logged in");
  //   }
  // }, [messege]);

  return (
    <div>
      <h1>this is login page</h1>
      <label>
        Username:
        {/* <input
          type="text"
          name="username"
          value={username || ""}
          onChange={(e) => setUsername(e.target.value)}
        /> */}
        <TextField
          type="text"
          name="username"
          value={username || ""}
          onChange={(e) => setUsername(e.target.value)}
        ></TextField>
      </label>
      <br />
      <label>
        Password:
        <TextField
          type="password"
          name="password"
          value={password || ""}
          onChange={(e) => setPassword(e.target.value)}
        ></TextField>
        {/* <input
          type="password"
          name="password"
          value={password || ""}
          onChange={(e) => setPassword(e.target.value)}
        /> */}
      </label>

      <br />

      <Button variant="contained" onClick={handleClick}>
        Login
      </Button>
      <ActionButton name={"login"} onClick={handleClick}></ActionButton>
      <br />
      {messege}
    </div>
  );
};

export default LoginPageComp;
