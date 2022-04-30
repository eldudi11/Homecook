import { useState, useEffect } from "react";
import ResultList from "../components/ResultList";
import { useNavigate } from "react-router-dom";
import { ADD_DISPLAYED_RECIPE } from "../store/actions/recipesAction";
import { useDispatch, useSelector } from "react-redux";
import { getApi, RECIPES_LOAD_RANDOM_API } from "../api/apiUtils";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
const DiscoverRecipesPageComp = () => {
  const [randomRecipes, setRandomRecipes] = useState([]);
  const [triggerRefrash, setTriggerRefrash] = useState(0);

  const dispatcher = useDispatch();
  const navigate = useNavigate();

  const data = useSelector((state) => state.users.currentUser);
  console.log(data);

  useEffect(() => {
    getApi(RECIPES_LOAD_RANDOM_API).then((data) => {
      let newData = data.data.map((item) => {
        return { recipe: item, missing: -1 };
      });
      setRandomRecipes(newData);
    });
  }, [triggerRefrash]);

  function getRecipe(recipe) {
    dispatcher({ type: ADD_DISPLAYED_RECIPE, payload: recipe });
    navigate("/recipe/", { replace: true });
  }

  function handleClick() {
    setTriggerRefrash(triggerRefrash + 1);
  }

  return (
    <div>
      {/* <div> */}
      {/* <Typography variant="h4">Discover Recipes</Typography> */}
      {/* </div> */}
      <h1>Discover Recipes</h1>
      <ResultList data={randomRecipes} callback={{ getRecipe: getRecipe }} />
      {/* <button onClick={handleClick}>Replace recipes</button> */}
      <Button variant="contained" onClick={handleClick}>
        Replace Recipes
      </Button>
    </div>
  );
};
export default DiscoverRecipesPageComp;
