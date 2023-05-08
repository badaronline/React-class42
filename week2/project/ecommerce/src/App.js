import { useState } from "react";
import "./App.css";
import { Categories } from "./components/Categories";
import { Products } from "./components/Products";
import { ProductDetails } from "./components/ProductDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [category, setCategory] = useState("all");

  function handleCategoryNameClick(category) {
    setCategory(category);
  }

  return (
    <div className="App">
      <h1>Products</h1>
      <Categories handleCategoryNameClick={handleCategoryNameClick} />
      <Routes>
        <Route path="/" element={<Products categoryName={category} />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}
export default function Root() {
  return (
    <Router>
      <App />
    </Router>
  );
}