import React from "react";
import "./App.css";
import { BrowserRouter, NavLink, Route, Routes as Switch } from "react-router-dom";
import Favorites from "./components/favorite";
import Home from "./components/Home";
import { FavoritesProvider } from "./context/FavoriteContext";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Products</h1>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                exact
                activeClassName="active-link"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/favorites"
                activeClassName="active-link"
              >
                Favorites
              </NavLink>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" element={<Home />} />
          <Route
            path="/favorites"
            element={
              <FavoritesProvider>
                <Favorites />
              </FavoritesProvider>
            }
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
