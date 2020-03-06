import React, { Component } from 'react';
import { addToCart } from '../../actions/products/productActions';

const getDiscount = (price, discount) => {
    console.log(price, discount)
    if(price !== discount){
        return (<span>
            <h3 className="small">
                <span>Precio Neto:</span>
                <span className="line-through">{price}</span>
            </h3>
            <h5>
                <span>Precio Descuento</span>{discount}
            </h5>
        </span>)
    }
    return  <h3 className="line-through small">{price}</h3>;

}
class Product extends Component {
    constructor(props) {
        super(props);
        this.addToCart = addToCart.bind(this);
      }
    render() {
    return (
        <div className="col xl3 l4 m6 s12">
            <div class="card">
            <div class="card-image">
                <img src={this.props.product.productImage}/>
                <h2 class="card-title">{this.props.product.name}</h2>
            </div>
            <div class="card-content">
                {getDiscount(this.props.product.price.original, this.props.product.price.discounted)}
            </div>
            <div class="card-action">
                <button type="button" onClick={this.addToCart}className="btn btn-block btn-primary waves-effect">This is a link</button>
            </div>
            </div>
    </div>);
    }
  }
export default Product;
