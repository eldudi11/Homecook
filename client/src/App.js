import "./App.css";
import React from "react";
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import DiscoverRecipesPage from "./pages/DiscoverRecipesPage";
import LoginPage from "./pages/LoginPage";
import MyIngredientsPage from "./pages/MyIngredientsPage";
import ResultRecipePage from "./pages/ResultRecipePage";
import RecipePage from "./pages/RecipePage";
import CreateUserPage from "./pages/CreateUserPage";
import { useDispatch } from "react-redux";
// import { getApi } from "./api/apiUtils";
// import { loadIngredients } from "./store/actions/ingredientsAction";
// import { loadRecipes } from "./store/actions/recipesAction";
import theme from "./theme";
import { ThemeProvider } from "@mui/material/styles";

function App() {
  useEffect(() => {
    // getApi("http://localhost:8000/users/login").then((data) =>
    //   console.log(data)
    // );
  }, []);
  const dispatcher = useDispatch();

  // useEffect(() => {
  //   dispatcher(loadIngredients());
  // }, []);

  // useEffect(() => {
  //   dispatcher(loadRecipes());
  // }, []);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <div>
            <NavTabs />
            <Routes>
              <Route path="/" element={<DiscoverRecipesPage />}></Route>
              <Route path="/login" element={<LoginPage />}></Route>
              <Route path="/createuser" element={<CreateUserPage />}></Route>
              <Route
                path="/myingredients"
                element={<MyIngredientsPage />}
              ></Route>
              <Route path="/result" element={<ResultRecipePage />}></Route>
              <Route path="/recipe/" element={<RecipePage />}></Route>
            </Routes>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
