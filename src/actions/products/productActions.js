import store from "../../store";
import {
  GET_PRODUCTS,
  GET_ERROR,
  ADD_TO_CART,
  GET_CART
} from "../actionTypes";

const cartUrl = "http://localhost:3001/cart";
const productUrl = "http://localhost:3001/products";

const errorAction = (message) => {

}
const fetchData = (url, action, params) => {
  fetch(url, params)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      return store.dispatch(action(data))
    })
    .catch(error => store.dispatch(errorAction(error)));
}

const updateCart = () => {
  fetchData(cartUrl, getCartSucceed);
}

export const getProductsAction = () => {
  updateCart();
  fetchData(productUrl, getProductsSucceed);
};

export const addToCart = (item, cart) => {
  let method = "POST";
  let url = "http://localhost:3001/cart"
  console.log('cart', cart);
  cart.map((product) => {
    console.log(product.id, item.id);
    if (product.id === item.id) {
      item['qty'] = product['qty'] + 1;
      method = "PUT";
      url += `/${item.id}`;
    }
    return false
  });

  console.log('Item', item);
  const params = {
    method: method,
    body: JSON.stringify(item),
    headers: {
      'Content-Type': 'application/json'
    }
  };
  fetchData(url, addToCartAction, params);
  updateCart();
}

export const getProductsSucceed = products => ({
  type: GET_PRODUCTS,
  payload: products
});

export const getCartSucceed = cart => ({
  type: GET_CART,
  payload: cart
});

export const getProductsError = error => ({
  type: GET_ERROR,
  payload: {
    error
  }
});

export const addToCartAction = (cartItems) => ({
  type: ADD_TO_CART,
  payload: cartItems,
})