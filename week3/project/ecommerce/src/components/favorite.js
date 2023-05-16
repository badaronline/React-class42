import React, { useContext, useEffect, useState } from "react";
import { useFetch } from "../customHook/useFetch";
import { FavoriteContext } from "../context/FavoriteContext";
import { ProductsItem } from "./products-item";

const Favorites = () => {
  const { favorites } = useContext(FavoriteContext);
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const [loading, setLoading] = useState(false); // Add loading state variable
  const [error, setError] = useState(null); // Add error state variable
  const { data: productsData, loading: productsLoading, error: productsError } = useFetch(
    "https://fakestoreapi.com/products"
  );

  useEffect(() => {
    if (productsData) {
      setFavoriteProducts([]);
      setLoading(true);

      const favoriteProductsData = productsData.filter((product) =>
        favorites.includes(product.id)
      );

      setLoading(false);
      setFavoriteProducts(favoriteProductsData);
    }
  }, [favorites, productsData]);

  useEffect(() => {
    setError(productsError);
  }, [productsError]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      {loading || productsLoading ? ( // Show loading UI when loading state is true
        <div className="loading--notification">
          <p className="loading">Loading...</p>
        </div>
      ) : favoriteProducts.length > 0 ? (
        <ul className="products">
          {favoriteProducts.map((product) => (
            <li key={product.id} className="products--item">
              <ProductsItem product={product} id={product.id} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="empty-favorites">
          <p>No favorite products yet!</p>
        </div>
      )}
    </>
  );
};

export default Favorites;
