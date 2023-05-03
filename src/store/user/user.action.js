//action is like the act of getting the red car from the shelve. It is yet to be dispatch to the customer

export const setCurrentUser = (user) => {
  return { type: "SET_CURRENT_USER", payload: user };
};
