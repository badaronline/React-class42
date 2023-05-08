import { useState } from "react";
import categories from "../fake-data/all-categories";

export const Categories = ({ handleCategoryNameClick }) => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);

  function handleClick(index) {
    setSelectedCategoryIndex(index);
    handleCategoryNameClick(categories[index].slice(6));
  }

  return (
    <div className="categories">
      {categories.map((category, index) => (
        <div
          key={index}
          className={
            selectedCategoryIndex === index
              ? "categories--item categories--item-selected"
              : "categories--item"
          }
          onClick={() => handleClick(index)}
        >
          {category.slice(6)}
        </div>
      ))}
    </div>
  );
};
