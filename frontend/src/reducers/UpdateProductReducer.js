
// eslint-disable-next-line no-unused-vars
import { UPDATE_PRODUCT } from '../constants/UpdateProductConstant'

const initialState = {
  network: "",
  phone_number: "",
  price: "",
  category: "",
  detail: "",
};

const updateProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_PRODUCT":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default updateProductReducer;