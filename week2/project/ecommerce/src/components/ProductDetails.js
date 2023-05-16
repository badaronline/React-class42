import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getProduct = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);

        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }

        const product = await response.json();
        setProduct(product);
      } catch (e) {
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    };

    getProduct();
  }, [id]);

  return (
    <div className="product-details">
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}

      <div className="title-container">
        <h1 className="title-container--title">{product.title}</h1>
      </div>
      <div className="product-details--information">
        <div className="product-details--image">
          <div className="product-image--container">
            <img
              className="product-image"
              src={product.image}
              alt={product.title}
            />
          </div>
        </div>
        <p className="product-details--description">{product.description}</p>
      </div>
    </div>
  );
};
