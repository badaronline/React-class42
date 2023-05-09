import React, { useState } from "react";
import { useFetch } from "../customHook/useFetch";

export const Categories = ({ handleCategoryNameClick }) => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(null);
  const {
    data: categoryData,
    error,
    loading,
  } = useFetch("https://fakestoreapi.com/products/categories");

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="categories">
      {loading ? (
        <div className="loading--notification">
          <p className="loading">Loading...</p>
        </div>
      ) : (
        categoryData.map((category, index) => (
          <div
            key={index}
            className={
              selectedCategoryIndex === index
                ? "categories--item categories--item-selected"
                : "categories--item"
            }
            onClick={() => {
              setSelectedCategoryIndex(index);
              handleCategoryNameClick(category);
            }}
          >
            {category}
          </div>
        ))
      )}
    </div>
  );
};
