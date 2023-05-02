import { useEffect, useState } from 'react';
import { ProductsItem } from './ProductsItem';
import { Link } from 'react-router-dom';

export const Products = ({ categoryName }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getCategories = async () => {
      setIsLoading(true);
      if (categoryName === 'all') {
        try {
          const response = await fetch('https://fakestoreapi.com/products');
          const productsAll = await response.json();
          setProducts(productsAll);
        } catch (e) {
          alert('Error: ' + e.message);
        }
      } else {
        try {
          const response = await fetch(
            `https://fakestoreapi.com/products/category/${categoryName}`
          );
          const productsByCategory = await response.json();
          setProducts(productsByCategory);
        } catch (e) {
          alert('Error: ' + e.message);
        }
      }
      setIsLoading(false);
    };
    getCategories();
  }, [categoryName]);
  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ul className='products'>
          {products.map(product => {
            return (
              <Link
                key={product.id}
                className='products--item'
                to={`/product/${product.id}`}
              >
                <ProductsItem product={product} />
              </Link>
            );
          })}
        </ul>
      )}
    </>
  );
};