import { useState } from "react";

const LoginPageComp = () => {
  const [name, setName] = useState("Avi");
  const [age, setAge] = useState(20);

  return (
    <div>
      <h1>this is login page</h1>
    </div>
  );
};

export default LoginPageComp;
