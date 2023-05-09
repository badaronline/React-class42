import React, { useEffect, useState } from "react";
import { ProductsItem } from "./products-item";
import { useFetch } from "../customHook/useFetch";
import { FavoritesProvider } from "../context/FavoriteContext";

export const Products = ({ categoryName, loading }) => {
  const [isLoaded, setIsLoaded] = useState(loading);
  const [categoryProducts, setCategoryProducts] = useState([]);
  const { data: categoryData, error } = useFetch(
    categoryName
      ? `https://fakestoreapi.com/products/category/${categoryName}`
      : "https://fakestoreapi.com/products"
  );
  useEffect(() => {
    if (categoryData) {
      setIsLoaded(false);
      setCategoryProducts(categoryData);
    }
  }, [categoryData, isLoaded]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      {isLoaded && (
        <div className="loading--notification">
          <p className="loading">Loading...</p>
        </div>
      )}
      {!isLoaded && (
        <FavoritesProvider>
          <ul className="products">
            {categoryProducts.map((product) => {
              return (
                <li key={product.id} className="products--item">
                  <ProductsItem product={product} id={product.id} />
                </li>
              );
            })}
          </ul>
        </FavoritesProvider>
      )}
    </>
  );
};
