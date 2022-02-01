import { useState } from "react";
import { useSelector } from "react-redux";
import SearchBox from "../components/SearchBox";

const MyIngredientPageComp = () => {
  const selectIng = useSelector((state) => state.ingredients);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  function getChoice(choice) {
    if (selectedIngredients.indexOf(choice) !== -1) {
      console.log("value already exist");
    } else {
      selectedIngredients.push(choice);
    }
  }
  return (
    <div>
      <h1>What's in your kitchen?</h1>

      {/* {selectIng.ingredientsList.map((ingredient, i) => {
        return <li key={i}>{ingredient.Name}</li>;
      })} */}

      <SearchBox
        data={selectIng.ingredientsList}
        selectedData={selectedIngredients}
        callback={{ getChoice: getChoice }}
      />
    </div>
  );
};

export default MyIngredientPageComp;
