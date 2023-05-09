import React, { useState } from "react";
import { Categories } from "./Categories";
import { Products } from "./Products";

const Home = () => {
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);

  function handleCategoryNameClick(category) {
    setCategory(category);
    setLoading(true);
  }
  return (
    <div>
      <Categories handleCategoryNameClick={handleCategoryNameClick} />
      <Products categoryName={category} loading={loading} />
    </div>
  );
};

export default Home;
