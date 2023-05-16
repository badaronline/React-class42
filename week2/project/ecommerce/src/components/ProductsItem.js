import { useState } from "react";

export const ProductsItem = ({ product }) => {
  const { title, image } = product;
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <div className="product">
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}

      <img
        className="product--image"
        src={image}
        alt={title}
        onLoad={() => setIsLoading(false)}
        onError={(error) => setError(error)}
      ></img>
      <span className="product--title" title={title}>
        {title}
      </span>
    </div>
  );
};
