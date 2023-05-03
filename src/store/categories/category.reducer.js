const INITIAL_STATE = {
  categories: [],
};

export const categoryReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_CATEGORIES":
      return {
        ...state,
        categories: payload,
      };
    default:
      return state;
  }
};
