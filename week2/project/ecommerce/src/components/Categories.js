import { useState, useEffect } from "react";

export const Categories = ({ handleCategoryNameClick }) => {
  const [selectedCategoryName, setSelectedCategoryName] = useState(null);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCategories = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(
          "https://fakestoreapi.com/products/categories"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch categories");
        }

        const categoriesAll = await response.json();
        setCategories(categoriesAll);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    getCategories();
  }, []);

  const handleCategoryItemClick = (category) => {
    setSelectedCategoryName(category);
    handleCategoryNameClick(category);
  };

  return (
    <div className="categories">
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}

      {categories.map((category) => (
        <div
          key={category}
          className={`categories--item ${
            selectedCategoryName === category ? "categories--item-selected" : ""
          }`}
          onClick={() => {
            handleCategoryItemClick(category);
          }}
        >
          {category}
        </div>
      ))}
    </div>
  );
};
