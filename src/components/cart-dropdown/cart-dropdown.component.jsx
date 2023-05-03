import "./cart-dropdown.styles.scss";
import Button from "../button/button.component";
import { cartContext } from "../contexts/cart.context";
import { useContext } from "react";
import CartItem from "../cart-item/cart-item.component";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
  const { cartItems } = useContext(cartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart-dropdown-container">
      {cartItems.length < 1 ? (
        <span>Cart is Empty</span>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              //console.log(item)
              <CartItem key={item.id} cartItem={item} />
            ))}
          </div>
          <Button onClick={goToCheckoutHandler}>Checkout</Button>
        </>
      )}
    </div>
  );
};

export default CartDropdown;
