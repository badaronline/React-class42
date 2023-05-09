import React, { useContext, useEffect, useState } from "react";
import { useFetch } from "../customHook/useFetch";
import { FavoriteContext } from "../context/FavoriteContext";
import { ProductsItem } from "./products-item";

const Favorites = () => {
  const { favorites } = useContext(FavoriteContext);
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const { data: productsData, error } = useFetch(
    "https://fakestoreapi.com/products"
  );

  useEffect(() => {
    if (productsData) {
      const favoriteProductsData = productsData.filter(
        (product) => favorites && favorites.includes(product.id)
      );
      setFavoriteProducts(favoriteProductsData);
    }
  }, [favorites, productsData]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      {favoriteProducts.length > 0 ? (
        <ul className="products">
          {favoriteProducts.map((product) => (
            <li key={product.id} className="products--item">
              <ProductsItem product={product} id={product.id} />
            </li>
          ))}
        </ul>
      ) : favorites.length > 0 ? (
        <div className="empty-favorites">
          <p>Loading</p>
        </div>
      ) : (
        <div className="empty-favorites">
          <p>No favorite products yet!</p>
        </div>
      )}
    </>
  );
};

export default Favorites;
