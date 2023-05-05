import { createSelector } from "reselect";

//extract just the slice of state
const selectCartReducer = (state) => state.cart;

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen
);

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((total, cartItem) => {
    console.log("trioggered");
    return total + cartItem.quantity * cartItem.price;
  }, 0)
);

export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.quantity;
  }, 0)
);
