// eslint-disable-next-line no-unused-vars
import { SET_SIMS } from "./types";

export const setSims = (sims) => {
  return {
    type: SET_SIMS,
    payload: sims
  };
};

export const fetchSims = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("http://127.0.0.1:8000/");
      const results = await response.json();
      dispatch(setSims({ "data": [...results.data] }));
    } catch (error) {

    }
  };
};