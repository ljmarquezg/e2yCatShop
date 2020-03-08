import { ADD_TO_CART, GET_PRODUCTS, GET_ERROR, LOADING, GET_CART } from "../../actions/actionTypes";

const INITIAL_STATE = {
  productList: [],
  cart: [],
  error: null,
  loading: true
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOADING:
      return {
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
    case GET_CART:
      return {
        ...state,
        cart: action.payload,
        error: null,
        loading: false
      }
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: action.payload
      }
    case GET_ERROR:
      return {
        error: action.payload.error
      }
    default:
      return state;
  }
};