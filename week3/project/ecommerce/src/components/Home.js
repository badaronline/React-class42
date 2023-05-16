import React, { useState } from "react";
import { Categories } from "./Categories";
import { Products } from "./Products";

const Home = () => {
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // Add error state variable

  function handleCategoryNameClick(category) {
    setCategory(category);
    setLoading(true);
    setError(null); // Reset error state when a new category is selected
  }

  return (
    <div>
      <Categories handleCategoryNameClick={handleCategoryNameClick} />
      <Products
        categoryName={category}
        loading={loading}
        setLoading={setLoading}
        setError={setError} // Pass the setError function to the Products component
      />
      {error && <div>Error: {error.message}</div>} {/* Display error message */}
    </div>
  );
};

export default Home;
