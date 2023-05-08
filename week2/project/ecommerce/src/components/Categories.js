import { useState, useEffect } from 'react';

export const Categories = ({ handleCategoryNameClick }) => {
  const [selectedCategoryName, setSelectedCategoryName] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const response = await fetch(
        'https://fakestoreapi.com/products/categories'
      );
      const categoriesAll = await response.json();
      setCategories(categoriesAll);
    };
    getCategories();
  }, []);

  const handleCategoryItemClick = (category) => {
    setSelectedCategoryName(category);
    handleCategoryNameClick(category);
  };

  return (
    <div className='categories'>
      {categories.map((category) => (
        <div
          key={category}
          className={`categories--item ${selectedCategoryName === category ? 'categories--item-selected' : ''}`
          }
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