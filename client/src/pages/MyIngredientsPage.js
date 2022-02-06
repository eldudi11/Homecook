import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import IngredientsList from "../components/IngredientsList";
import SearchBox from "../components/SearchBox";

const MyIngredientPageComp = () => {
  const selectIng = useSelector((state) => state.ingredients);
  const dispatcher = useDispatch();
  // const [selectedIngredients, setSelectedIngredients] = useState([]);
  function getChoice(choice) {
    dispatcher({ type: "ADD_SELECTED_INGREDIENT", payload: choice });
  }
  return (
    <div>
      <h1>What's in your kitchen?</h1>

      {/* {selectIng.ingredientsList.map((ingredient, i) => {
        return <li key={i}>{ingredient.Name}</li>;
      })} */}

      <SearchBox
        data={selectIng.ingredientsList}
        selectedData={selectIng.selectedIngredients}
        callback={{ getChoice: getChoice }}
      />
      <IngredientsList />
    </div>
  );
};

export default MyIngredientPageComp;
