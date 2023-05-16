import React, { useEffect, useState } from "react";
import { ProductsItem } from "./products-item";
import { useFetch } from "../customHook/useFetch";
import { FavoritesProvider } from "../context/FavoriteContext";

export const Products = ({ categoryName, loading }) => {
  const [isLoaded, setIsLoaded] = useState(loading);
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [loadingData, setLoadingData] = useState(false); // Add loading state variable
  const [error, setError] = useState(null); // Add error state variable
  const { data: categoryData, loading: categoryLoading, error: categoryError } = useFetch(
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

  useEffect(() => {
    setLoadingData(categoryLoading); // Update the loading state
    setError(categoryError); // Update the error state
  }, [categoryLoading, categoryError]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      {(isLoaded || loadingData) && ( // Use isLoaded and loadingData to show loading UI
        <div className="loading--notification">
          <p className="loading">Loading...</p>
        </div>
      )}
      {!isLoaded && !loadingData && ( // Show the content when not loading
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
