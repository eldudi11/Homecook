import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";

export default function SearchBox(props) {
  const [isSelected, setIsSelected] = React.useState(false);

  //TODO - OPEN DRAW ONLY AFTER TYPING
  return (
    <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        key={isSelected}
        freeSolo
        options={props.data.map((option) => {
          return option.Name;
        })}
        renderInput={(params) => <TextField {...params} label="Ingredient" />}
        getOptionDisabled={(option) =>
          props.selectedData.indexOf(option) !== -1
        }
        onChange={(e, userInput) => {
          isSelected ? setIsSelected(false) : setIsSelected(true);

          props.callback.getChoice(userInput);
        }}
      />
    </Stack>
  );
}
