import { combineReducers } from "redux"; //combine reducer combines all individual reducers into one root reducer (store)
import { userReducer } from "./user/user.reducer";
import { categoryReducer } from "./categories/category.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoryReducer,
});
