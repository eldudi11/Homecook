import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import InfoIcon from "@mui/icons-material/Info";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import { postApi } from "../api/apiUtils";
import { useNavigate } from "react-router";

export default function ResultList(props) {
  //const selectRecipes = useSelector((state) => state.recipes.myRecipesList);
  const selectRecipes = props.data;
  const user = useSelector((state) => state.users.currentUser);
  console.log(user);
  const navigate = useNavigate();

  function handleFavoriteClick(recipe) {
    console.log(recipe);
    postApi("http://localhost:8000/users/addfavorite", recipe).then((data) => {
      console.log(data);
    });
  }

  function isFavorite(recipe) {
    if (Object.keys(user).length === 0) {
      return <FavoriteBorderIcon />;
      //  navigate("/login/", { replace: true });
    }

    let match = user.Recipes.find((x) => x._id === recipe._id);

    if (match != undefined) {
      return <FavoriteIcon />;
    } else {
      return <FavoriteBorderIcon />;
    }
  }

  return (
    <Grid alignItems="center" direction="column" container>
      <ImageList sx={{ width: 500 }}>
        <ImageListItem key="Subheader" cols={2}></ImageListItem>
        {selectRecipes.map((item) => (
          <ImageListItem key={item.recipe._id}>
            <img
              onClick={() => {
                props.callback.getRecipe(item);
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
                // <Link to="/recipe/s234"></Link>;
                // props.callback.getRecipe(item);
              }}
              title={item.recipe.Name}
              subtitle={item.recipe.Name}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${item.recipe.Name}`}
                  onClick={() => handleFavoriteClick(item.recipe)}
                >
                  {isFavorite(item.recipe)}
                  {/* <FavoriteBorderIcon /> */}
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Grid>
  );
}
