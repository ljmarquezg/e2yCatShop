import React from "react";
import { useSelector } from "react-redux";

import Product from "../components/product/Product";
import { cartItem } from "../components/product/CartItem";
import { addToCart } from "../actions/products/productActions";

const Root = () => {
  const productList = useSelector(state => state.product.productList);
  const cart = useSelector(state => state.product.cart);
  const error = useSelector(state => state.product.error);
  const bindAddToCart = (product) => {
    addToCart(createItem(product), cart);
  }
  const createItem = (product) => {
    cartItem.id = product.id;
    cartItem.qty = 1;
    return cartItem
  }

  if (productList.length) {
    return (
      <div key="root" className="root-container row">
        {productList.map(
          (product) => {
            return (
              <div key={product.id} className={`col${product.inStock ? "" : " disabled"}`}>
                <Product product={product} addToCartClick={bindAddToCart} />
              </div>
            )
          }
        )}
      </div>)
  } else {
    return (<div key="1" className="root-container row">
      No existen
    </div>)
  }

};

export default Root;
