import axios from "axios";
export const RECIPES_API = "http://localhost:8000/recipes";
export const RECIPES_LOAD_MORE_API = "http://localhost:8000/recipes/loadmore";
export const INGREDIENTS_API = "http://localhost:8000/ingredients";
export const RECIPES_LOAD_RANDOM_API =
  "http://localhost:8000/recipes/loadrandom";

export async function getApi(api, obj = {}) {
  try {
    return await axios.get(api, {
      params: [obj],
    });
  } catch (err) {
    console.log(err);
  }
}
