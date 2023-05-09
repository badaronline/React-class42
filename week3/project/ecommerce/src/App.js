import React, { useState } from "react";
import "./App.css";
// this are the imports needed to work
import { BrowserRouter, Link, Route, Routes as Switch } from "react-router-dom";
import Favorites from "./components/favorite";
import Home from "./components/Home";
import { FavoritesProvider } from "./context/FavoriteContext";

function App() {
  const [activeLink, setActiveLink] = useState("/");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Products</h1>
        <nav>
          <ul>
            <li>
              <Link
                to="/"
                style={{
                  fontWeight: activeLink === "/" ? "bold" : "normal",
                  textDecoration: activeLink === "/" ? "underline" : "none",
                }}
                onClick={() => handleLinkClick("/")}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/favorites"
                style={{
                  fontWeight: activeLink === "/favorites" ? "bold" : "normal",
                  textDecoration:
                    activeLink === "/favorites" ? "underline" : "none",
                }}
                onClick={() => handleLinkClick("/favorites")}
              >
                Favorites
              </Link>
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
