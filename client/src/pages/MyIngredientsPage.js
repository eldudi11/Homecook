import { useState } from "react";
import { useSelector } from "react-redux";

const MyIngredientPageComp = () => {
  const selectIng = useSelector((state) => state.ingredients);
  return (
    <div>
      <h1>this is my ingerdients page</h1>
      {selectIng.ingredientsList.map((ing, index) => {
        return <h3 key={index}>{ing}</h3>;
      })}
    </div>
  );
};

export default MyIngredientPageComp;
