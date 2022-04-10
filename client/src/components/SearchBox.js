import * as React from "react";
import TextField from "@mui/material/TextField";
// import Stack from "@mui/material/Stack";
// import Autocomplete from "@mui/material/Autocomplete";
import debounce from "lodash.debounce";
import { Grid } from "@mui/material";
import { getApi, INGREDIENTS_API } from "../api/apiUtils";

const fetchSearchResults = async (query) => {
  if (query && query.length > 2) {
    const res = await getApi(INGREDIENTS_API, query);
    console.log(res.data[0].Name);
    return [res.data[0].Name];
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
}, 2000);

export default function SearchBox() {
  const [results, setResults] = React.useState([]);
  const [query, setQuery] = React.useState("");

  React.useEffect(() => {
    debouncedFetchData(query, (res) => {
      setResults(res);
    });
  }, [query]);

  return (
    <Grid alignItems="center" direction="column" container>
      {/* <Stack spacing={2} sx={{ width: 300 }}>
        <Autocomplete
          key={isSelected}
          freeSolo
          options={results.map((option) => {
            return option;
          })}
          renderInput={(params) => <TextField {...params} label="Ingredient" />}
          getOptionDisabled={(option) =>
            props.selectedData.indexOf(option) !== -1
          }
          onChange={(e, userInput) => {
            // isSelected ? setIsSelected(false) : setIsSelected(true);

            // props.callback.getChoice(userInput);
            setQuery(e.target.value);
          }}
        />
      </Stack> */}
      <TextField
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      ></TextField>
      {results}
    </Grid>
  );
}
