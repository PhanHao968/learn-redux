// eslint-disable-next-line no-unused-vars
import { SET_SIMS } from "../actions/types";


const initialState = {
  sims: { "data": [] }
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SIMS":
      return {
        ...state,
        sims: action.payload
      };
    default:
      return state;
  }
};

export default productReducer;