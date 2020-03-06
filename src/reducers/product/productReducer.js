import {GET_PRODUCTS, GET_PRODUCTS_ERROR, LOADING, ADD_TO_CART}from "../../actions/actionTypes";

const INITIAL_STATE = {
  productList: [],
  cartItems: [], 
  error: null,
  loading: true
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOADING:
      return{
        ...state,
        error: null,
        loading: true,
      }
    case GET_PRODUCTS:
      return {
        ...state,
        productList: action.payload,
        error: null,
        loading: false
      }
      case ADD_TO_CART:
      return {
        ...state,
        productList: action.productList,
        cartItems: action.item
      }
    case GET_PRODUCTS_ERROR:
      return {
        productList: [],
        error: action.payload.error
      }
    default:
      return state;
  }
};