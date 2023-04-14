import "./product-card.styles.scss";
import Button from "../button/button.component";
import { useContext } from "react";
import { cartContext } from "../contexts/cart.context";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemsToCart } = useContext(cartContext);

  const addProductTocart = () => addItemsToCart(product);
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addProductTocart}>
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
