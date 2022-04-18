import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import debounce from "lodash.debounce";
import { Grid } from "@mui/material";
import { getApi, INGREDIENTS_API } from "../api/apiUtils";
import { Construction } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import { ADD_SELECTED_INGREDIENT } from "./../store/actions/ingredientsAction";

const fetchSearchResults = async (query) => {
  if (query && query.length > 1) {
    const res = await getApi(INGREDIENTS_API, query);
    console.log(res.data);
    return res.data;
  } else {
    return [];
  }
};

const fetchData = async (query, cb) => {
  const res = await fetchSearchResults(query);
  cb(res);
};

const debouncedFetchData = debounce((query, cb) => {
  fetchData(query, cb);
}, 500);

export default function SearchBox() {
  const [results, setResults] = React.useState([]);
  const [query, setQuery] = React.useState("");
  const [isSelected, setIsSelected] = React.useState(false);

  const dispatcher = useDispatch();
  const selectIng = useSelector((state) => state.ingredients);

  React.useEffect(() => {
    debouncedFetchData(query, (res) => {
      setResults(res);
    });
  }, [query]);

  function handleChange(e) {
    dispatcher({ type: ADD_SELECTED_INGREDIENT, payload: e });
  }

  return (
    <Grid alignItems="center" direction="column" container>
      <Stack spacing={2} sx={{ width: 300 }}>
        <Autocomplete
          // freeSolo
          options={results.map((option) => {
            return option.Name;
          })}
          renderInput={(params) => <TextField {...params} label="Ingredient" />}
          onInputChange={(e, value) => {
            setQuery(value);
            isSelected ? setIsSelected(false) : setIsSelected(true);
          }}
          getOptionDisabled={(option) =>
            selectIng.selectedIngredients.indexOf(option) !== -1
          }
          onChange={(e, selectedVal) => handleChange(selectedVal)}
        />
      </Stack>
    </Grid>
  );
}
