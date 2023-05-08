import products from "../fake-data/all-products";
import { ProductsItem } from "./products-item";

export const Products = ({ categoryName }) => {
  const filteredProducts =
    categoryName === "all"
      ? products
      : products.filter((product) => product.category === categoryName);

  return (
    <ul className="products">
      {filteredProducts.map((product) => (
        <li key={product.id} className="products--item">
          <ProductsItem product={product} />
        </li>
      ))}
    </ul>
  );
};
