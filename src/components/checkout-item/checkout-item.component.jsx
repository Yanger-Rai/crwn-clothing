import "./checkout-item.styles.scss";
import { useDispatch, useSelector } from "react-redux";

import {
  removeCartItem,
  addItemsToCart,
  deleteCartItem,
} from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

const CheckoutItems = ({ checkoutItem }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const { name, imageUrl, price, quantity } = checkoutItem;

  const removeItemHandler = () =>
    dispatch(removeCartItem(cartItems, checkoutItem));
  const addItemHandler = () =>
    dispatch(addItemsToCart(cartItems, checkoutItem));

  const deleteItemHandler = () =>
    dispatch(deleteCartItem(cartItems, checkoutItem));

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
