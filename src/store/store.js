import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

const middleWares = [logger];

const composedEnchancers = compose(applyMiddleware(...middleWares));
//all the store need is a rootreducer as the argument, but the logger helps to see the states
//before the action hits the store and after the dispatch hits reducer
export const store = createStore(rootReducer, undefined, composedEnchancers);
