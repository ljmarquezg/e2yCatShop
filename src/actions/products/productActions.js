import store from "../../store";
import { GET_PRODUCTS, GET_PRODUCTS_ERROR, ADD_TO_CART } from "../actionTypes";

export const getProductsAction = () => {
    fetch("http://localhost:3001/products")
      .then(response => response.json())
      .then(data => store.dispatch(getProductsSucceed(data)));
};

export const addToCart = product => {
  fetch("http://localhost:3001/products")
      .then(response => response.json())
      .then(data => store.dispatch(getProductsSucceed(data)));
}
export const getProductsSucceed = products => ({
  type: GET_PRODUCTS,
  payload: products
});

export const getProductsError = error => ({
  type: GET_PRODUCTS_ERROR,
  payload: {error}
});

export const addToCartAction = product =>({
  type: ADD_TO_CART,
  cart: product,
})