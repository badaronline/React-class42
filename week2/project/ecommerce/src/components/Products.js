import { useEffect, useState } from "react";
import { ProductsItem } from "./ProductsItem";
import { Link } from "react-router-dom";

export const Products = ({ categoryName }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      setIsLoading(true);
      setError(null);

      try {
        let response;

        if (categoryName === "all") {
          response = await fetch("https://fakestoreapi.com/products");
        } else {
          response = await fetch(
            `https://fakestoreapi.com/products/category/${categoryName}`
          );
        }

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const productsData = await response.json();
        setProducts(productsData);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    getProducts();
  }, [categoryName]);

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}

      {!isLoading && !error && (
        <ul className="products">
          {products.map((product) => (
            <Link
              key={product.id}
              className="products--item"
              to={`/product/${product.id}`}
            >
              <ProductsItem product={product} />
            </Link>
          ))}
        </ul>
      )}
    </>
  );
};
