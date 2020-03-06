import React from "react";
import Product from "../components/product/Product";
import { useSelector } from "react-redux";

const Root = () => {
  const productList = useSelector (state => state.product.productList)
  if(productList.length){
    return (
      <div key="1" className="root-container row">
      {productList.map( 
        (product) => {
          return <Product product={product}/>
        }
      )}
      </div>)
  }else{
   return ( <div key="1" className="root-container row">
    No existen
    </div>)
  }
  
};

export default Root;
