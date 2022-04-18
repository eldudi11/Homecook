import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";

export default function ResultList(props) {
  //const selectRecipes = useSelector((state) => state.recipes.myRecipesList);
  const selectRecipes = props.data;
  console.log("THIS IS PROPS:" + selectRecipes);
  return (
    <Grid alignItems="center" direction="column" container>
      <ImageList sx={{ width: 500 }}>
        <ImageListItem key="Subheader" cols={2}></ImageListItem>
        {selectRecipes.map((item) => (
          <ImageListItem key={item.recipe._id}>
            <img
              onClick={() => {
                props.callback.getID(item.recipe._id);
              }}
              component={Link}
              to={"/"}
              src={`${item.recipe.Image}?w=248&fit=crop&auto=format`}
              srcSet={`${item.recipe.Image}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.recipe.Name}
              loading="lazy"
            />
            <ImageListItemBar
              onClick={() => {
                <Link to="/recipe/s234"></Link>;
                props.callback.getID(item.recipe._id);
              }}
              title={item.recipe.Name}
              subtitle={item.recipe.Name}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${item.recipe.Name}`}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Grid>
  );
}
