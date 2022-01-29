import { useState } from "react";

const MyIngredientPageComp = () => {
  const [name, setName] = useState("Avi");
  const [age, setAge] = useState(20);

  return (
    <div>
      <h1>this is my ingerdients page</h1>
    </div>
  );
};

export default MyIngredientPageComp;
