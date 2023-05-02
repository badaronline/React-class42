import { useState, useEffect } from 'react';

export const Categories = ({ handleCategoryNameClick }) => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(null);
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

  return (
    <div className='categories'>
      {categories.map((category, index) => (
        <div
          key={index}
          className={
            selectedCategoryIndex === index
              ? 'categories--item categories--item-selected'
              : 'categories--item'
          }
          onClick={e => {
            setSelectedCategoryIndex(index);
            handleCategoryNameClick(e);
          }}
        >
          {category}
        </div>
      ))}
    </div>
  );
};