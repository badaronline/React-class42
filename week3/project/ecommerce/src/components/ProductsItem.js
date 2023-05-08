export const ProductsItem = ({ product }) => {
  const { title, image } = product;
  return (
    <div className='product'>
      <img className='product--image' src={image} alt={title}></img>
      <span className='product--title' title={title}>
        {title}
      </span>
    </div>
  );
};