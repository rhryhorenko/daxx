import * as types from '../constants';

const initialState = {
  products: [],
  activeProduct: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.PRODUCTS_SUCCESS:
      return { ...state, products: [...action.payload] };
    case types.SINGLE_PRODUCT_SUCCESS:
      return { ...state, activeProduct: { ...action.payload[0] } };
    default:
      return state;
  }
}
