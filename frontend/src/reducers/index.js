import { combineReducers } from "redux";
import productReducer from "./ProductReducer";
import updateProductReducer from "./UpdateProductReducer";

const rootReducer = combineReducers({
  sims: productReducer,
  updateProductInfo: updateProductReducer,
});

export default rootReducer;