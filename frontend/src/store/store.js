// import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
//
// import productReducer from "../reducers/ProductReducer";
//
// const store = createStore(productReducer, applyMiddleware(thunk));
//
// export default store;


import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import productReducer from "../reducers/ProductReducer";
import updateProductReducer from "../reducers/UpdateProductReducer";

const store = configureStore({
  reducer: {
    sims: productReducer,
    updateProductInfo: updateProductReducer
  },
  middleware: [thunk]
});

export default store;