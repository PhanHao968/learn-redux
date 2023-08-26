import {
  FETCH_SIMS_REQUEST,
  FETCH_SIMS_SUCCESS,
  FETCH_SIMS_FAILURE}
  from '../constants/ProductConstant';
import data from "bootstrap/js/src/dom/data";

export const fetchSimsRequest =()=>({
  type:FETCH_SIMS_REQUEST,
});

export const fetchSimsSuccess = (sims)=>({
  type: FETCH_SIMS_SUCCESS,
  payload: sims,
})

export const fetchSimsFailure = (error) => ({
  type: FETCH_SIMS_FAILURE,
  payload: error,
});

export const fetchSims = () => {
  return async (dispatch) => {
    dispatch(fetchSimsRequest());
    try {
      const response = await fetch("http://127.0.0.1:8000/");
      const data = await response.json();
      dispatch(fetchSimsSuccess(data));
    } catch (error) {
      dispatch(fetchSimsFailure(error));
    }
  };
};
