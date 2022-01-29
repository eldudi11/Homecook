import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Page1 from "./pages/DiscoverRecipesPage";
import Page2 from "./pages/LoginPage";
import Page3 from "./pages/MyIngredientsPage";
import { useDispatch } from "react-redux";

function App() {
  // useEffect(() => {
  //   getApi("http://localhost:8000/users").then((data) => console.log(data));
  // }, []);
  const dispatcher = useDispatch();

  useEffect(() => {
    dispatcher({
      type: "LOAD_INGREDIENTS",
      payload: ["banana", "apple"],
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <div>
          <NavTabs />
          <Routes>
            <Route path="/" element={<Page1 />}></Route>
            <Route path="/login" element={<Page2 />}></Route>
            <Route path="/myingredients" element={<Page3 />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
