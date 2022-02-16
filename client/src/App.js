import logo from "./logo.svg";
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
import { useDispatch } from "react-redux";
import { loadIngredients } from "./store/actions/ingredientsAction";
import { loadRecipes } from "./store/actions/recipesAction";

function App() {
  // useEffect(() => {
  //   getApi("http://localhost:8000/users").then((data) => console.log(data));
  // }, []);
  const dispatcher = useDispatch();

  useEffect(() => {
    dispatcher(loadIngredients());
  }, []);
  useEffect(() => {
    dispatcher(loadRecipes());
  }, []);

  return (
    <Router>
      <div className="App">
        <div>
          <NavTabs />
          <Routes>
            <Route path="/" element={<DiscoverRecipesPage />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route
              path="/myingredients"
              element={<MyIngredientsPage />}
            ></Route>
            <Route path="/result" element={<ResultRecipePage />}></Route>
            <Route path="/recipe/:id" element={<RecipePage />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
