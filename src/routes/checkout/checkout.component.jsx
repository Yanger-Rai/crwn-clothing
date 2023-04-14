import "./checkout.styles.scss";
import CheckoutItems from "../../components/checkout-item/checkout-item.component";

import { useContext } from "react";
import { cartContext } from "../../components/contexts/cart.context";

const Checkout = () => {
  const { cartItems } = useContext(cartContext);

  const cartTotal = cartItems.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.quantity * currentValue.price;
  }, 0);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((item) => (
        <CheckoutItems key={item.id} checkoutItem={item} />
      ))}
      <span className="total">Total: ${cartTotal}</span>
    </div>
  );
};

export default Checkout;
