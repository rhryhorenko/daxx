import * as types from '../constants';
import data from '../product_lists.json';

export const getAllProducts = () => {
  return async dispatch => {
    dispatch({
      type: types.PRODUCTS_SUCCESS,
      payload: data.results[0].hits
    });
  };
};

export const getSingleProduct = id => {
  return async dispatch => {
    dispatch({
      type: types.SINGLE_PRODUCT_SUCCESS,
      payload: getProduct(data, id)
    });
  };
};

const getProduct = (data, id) => {
  return data.results[0].hits.filter(prod => prod.post_id == id);
};
