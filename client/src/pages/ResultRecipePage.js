import { useState } from "react";

const ResultRecipePageComp = () => {
  const [name, setName] = useState("Avi");
  const [age, setAge] = useState(20);

  return (
    <div>
      <h1>this is my Result Recipe Page page</h1>
    </div>
  );
};

export default ResultRecipePageComp;
