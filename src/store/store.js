import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { rootReducer } from "./root-reducer";

//first step tp persist - is to configure the persist
const persistConfig = {
  key: "root", //means I want to persist (store) everything from the app
  storage, //this is where I want to store (generally the browser storage)
  blacklist: ["user"], //which reducer value we do not want to persist. User comes directly from authstate anyway
};

//second, create a persistedReducer using the persist configuration
//and the imported persistedReducer
//This will be used now inside the redux store
const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [logger];

const composedEnchancers = compose(applyMiddleware(...middleWares));
//all the store need is a rootreducer as the argument, but the logger helps to see the states
//before the action hits the store and after the dispatch hits reducer
export const store = createStore(
  persistedReducer,
  undefined,
  composedEnchancers
);

//the redux store is now inside persistedStore which will be called in index.js
export const persistor = persistStore(store);
