import { createContext, useReducer } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const productExist = cartItems.find((cartitem) => {
    return cartitem.id === productToAdd.id;
  });

  if (productExist) {
    //returns a new object. DO NOT MUTATE existing objects
    return cartItems.map((item) =>
      item.id === productToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }

  // the below code will return a new array. When using spread operator to combine
  //two arrays, if there are same object in the two array with the same id,
  // the new array will have just one object with that id. if none, it will create
  //a new object with that id
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const deleteItem = (cartItems, product) => {
  const productExits = cartItems.find((cartItem) => {
    return cartItem.id === product.id;
  });

  if (!productExits) {
    return cartItems;
  }

  if (productExits.quantity === 1) {
    return cartItems.filter((item) => item.id !== product.id); //filters object with quantity 0
  }

  if (productExits) {
    return cartItems.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
    );
  }
};

const removeItem = (cartItems, product) => {
  return cartItems.filter((item) => item.id !== product.id);
};

export const cartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemsToCart: () => {},
  deleteItem: () => {},
  removeItem: () => {},
});

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
};

const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "TOGGLE_CART":
      return {
        ...state,
        isCartOpen: !state.isCartOpen,
      };
    case "MODIFY_CART":
      return {
        ...state,
        // ...payload, this works too
        cartItems: [...payload.cartItems],
      };
    default:
      throw new Error(`unhandled type of ${type} in cartReducer`);
  }
};

export const CartProvider = ({ children }) => {
  const [{ isCartOpen, cartItems }, dispatch] = useReducer(
    cartReducer,
    INITIAL_STATE
  );

  const setIsCartOpen = () => {
    dispatch({ type: "TOGGLE_CART" });
  };

  const setCartItems = (item) => {
    dispatch({ type: "MODIFY_CART", payload: { cartItems: item } });
  };

  const addItemsToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const deleteCartItem = (product) => {
    setCartItems(deleteItem(cartItems, product));
  };

  const removeCartItem = (product) => {
    setCartItems(removeItem(cartItems, product));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemsToCart,
    deleteCartItem,
    removeCartItem,
  };

  return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
};
