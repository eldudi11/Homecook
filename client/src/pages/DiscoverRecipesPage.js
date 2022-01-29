import { useState } from "react";

function DiscoverRecipesPageComp() {
  const [name, setName] = useState("Avi");
  const [age, setAge] = useState(20);

  return (
    <div className="page1">
      <h1>this is my Discover Recipe Page page</h1>
    </div>
  );
}

export default DiscoverRecipesPageComp;
