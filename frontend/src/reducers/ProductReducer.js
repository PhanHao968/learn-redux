import {
  FETCH_SIMS_REQUEST,
  FETCH_SIMS_SUCCESS,
  FETCH_SIMS_FAILURE}
  from '../constants/ProductConstant';
import {fetchSims} from "../actions/ProductAction";



const initialState = {
  sims: [],
  loading: false,
  error: null,
};

const simsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SIMS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_SIMS_SUCCESS:
      return {
        ...state.sims,
        loading: false,
        sims: action.payload,
      };
    case FETCH_SIMS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default simsReducer;