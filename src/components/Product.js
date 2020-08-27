import React from "react";

const Product = ({ product }) => {

const handleAddToCart = () => {
    console.log('added products')
}
  return (
    <div className="card_wrapper">
      <div className="product_image">
        <img src={product.image} />
      </div>
      <p>{product.name}</p>
      <p>
        <b>{product.price}</b>
      </p>
      <button onClick={() => {handleAddToCart()}} className="addCart_btn">
        ADD TO CART
      </button>
    </div>
  )
  }
export default Product;
