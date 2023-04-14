import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./card-icon.styles.scss";
import { useContext } from "react";
import { cartContext } from "../contexts/cart.context";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(cartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  const { cartItems } = useContext(cartContext);

  const totalItems = cartItems.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.quantity;
  }, 0);

  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{totalItems}</span>
    </div>
  );
};

export default CartIcon;
