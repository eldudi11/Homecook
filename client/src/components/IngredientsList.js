import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarIcon from "@mui/icons-material/Star";
import AddIcon from "@mui/icons-material/Add";
import Tooltip from "@mui/material/Tooltip";
import { useSelector, useDispatch } from "react-redux";
import { DELETE_SELECTED_INGREDIENT } from "./../store/actions/ingredientsAction";

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function IngredientsList() {
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  const selectIng = useSelector((state) => state.ingredients);
  const dispatcher = useDispatch();

  function deleteSelectedIngredient(item) {
    //console.log(item);
    dispatcher({ type: DELETE_SELECTED_INGREDIENT, payload: item });
  }

  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            My Ingredients
          </Typography>
          <Demo>
            <List dense={dense}>
              {selectIng.selectedIngredients.map((item, index) => (
                // <li key={"section-${item}"}>
                <ListItem
                  key={index}
                  secondaryAction={
                    <ListItemIcon>
                      <IconButton
                        edge="end"
                        onClick={() => {
                          deleteSelectedIngredient(item);
                        }}
                      >
                        <Tooltip title="Delete" disableInteractive>
                          <DeleteIcon />
                        </Tooltip>
                      </IconButton>
                      {/* <IconButton
                        edge="end"
                        onClick={() => {
                          deleteSelectedIngredient(item);
                        }}
                      >
                        <Tooltip title="Delete" disableInteractive>
                          <DeleteIcon />
                        </Tooltip>
                      </IconButton> */}
                    </ListItemIcon>
                  }
                >
                  <ListItemText
                    primary={item}
                    secondary={secondary ? "Secondary text" : null}
                  />
                </ListItem>
                // </li>
              ))}
            </List>
          </Demo>
        </Grid>
      </Grid>
    </Box>
  );
}
