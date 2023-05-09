import React, { useContext } from "react";
import { FavoriteContext } from "../context/FavoriteContext";
import { heartRegular, heartSolid } from "../assets";

export const ProductsItem = ({ product }) => {
  const { title, image, id } = product;
  const { favorites, toggleFavorite } = useContext(FavoriteContext);
  const isFavorite = favorites.includes(id);

  return (
    <div className="product-card">
      <div className="product-card__image">
        <img className="product--image" src={image} alt={title} />
        <button
          className="product-card__like-button"
          onClick={() => toggleFavorite(id)}
        >
          <img
            src={isFavorite ? heartSolid : heartRegular}
            alt={isFavorite ? "liked" : "like"}
          />
        </button>
      </div>
      <div className="product-card__info">
        <span className="product--title" title={title}>
          {title}
        </span>
      </div>
    </div>
  );
};
