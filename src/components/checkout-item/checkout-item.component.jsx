import "./checkout-item.styles.scss";
import { useContext } from "react";
import { cartContext } from "../contexts/cart.context";

const CheckoutItems = ({ checkoutItem }) => {
  const { name, imageUrl, price, quantity } = checkoutItem;
  const { addItemsToCart, deleteCartItem, removeCartItem } =
    useContext(cartContext);

  const removeItemHandler = () => removeCartItem(checkoutItem);
  const addItemHandler = () => addItemsToCart(checkoutItem);

  const deleteItemHandler = () => deleteCartItem(checkoutItem);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={deleteItemHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">{`${price * quantity}`}</span>
      <div className="remove-button" onClick={removeItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItems;
