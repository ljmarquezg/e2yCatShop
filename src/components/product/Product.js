import React, { Component } from 'react';

const getDiscount = (price, discount) => {
    console.log(price, discount)
    if (price !== discount) {
        return (<span>
            <h3 className="price">
                <span className="line-through">{price}&euro;</span>&nbsp;<span>{discount}&euro;</span>
            </h3>
        </span>)
    }
    return <h3 className="price"><span>{price}&euro;</span></h3>;

}

const renderButton = (inStock, action) => {
    if (inStock) {
        return (<button type="button" onClick={action} className="btn btn-block btn-primary waves-effect">
            <i class="ion ion-ios-cart-outline"></i>
        </button>
        )
    }
    return <h5 class="m0">Out of Stock</h5>
}

class Product extends Component {
    addToCartHandler = () => {
        this.props.addToCartClick(this.props.product);
    }
    render() {
        return (
            <div className="card" key={this.props.key}>
                <div className="card-image">
                    <img src={this.props.product.productImage} alt="" />
                </div>
                <div className="card-content">
                    <h2 className="card-title">{this.props.product.name}</h2>
                    {getDiscount(this.props.product.price.original, this.props.product.price.discounted)}
                </div>
                <div className="card-action">
                    {renderButton(this.props.product.inStock, this.addToCartHandler)}
                </div>
            </div>);
    }
}
export default Product;
