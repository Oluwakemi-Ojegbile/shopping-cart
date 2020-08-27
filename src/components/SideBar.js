import React, { useState } from "react";
import { connect } from "react-redux";
import CartImg from "../assets/cart_icon.svg";

const SideBar = ({ products }) => {
  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    setToggle(!toggle);
  }

  return (
    <>
      <button className="top cart" onClick={handleToggle}>
        <div className="cartIcon">
          <img src={CartImg} alt="cart icon" />
        </div>
        <span className="total_count">2</span>
      </button>
      {toggle && (
        <div
          className={`sidebar_wrapper ${toggle ? " smooth-transition" : ""}`}
        >
          <button className="close_popup" onClick={handleToggle}>
            X
          </button>
          <div className="top">
            <div className="cartIcon">
              <img src={CartImg} alt="cart icon" />
            </div>
            <div className="title">
              <b>Cart</b>
            </div>
            <span className="total_count">2</span>
          </div>
          <div className="added_product">
            <div className="product_pic">
              <img
                src="https://youqlo.com/wp-content/uploads/2018/05/27588-0ymdfs.jpg"
                alt="product image"
              />
            </div>
            <div>
              <h5>Christian Shoe-JGeTters Skyros</h5>
              <h6>Christian Shoe-JGeTters Skyros</h6>
              <small>
                Quantity: <span className="quantity">10</span>
              </small>
            </div>
            <div>
              <p className="cost">$25,000.00</p>
              <span>
                <button className="plusminus_btn">-</button>
              </span>
              <span>
                <button className="plusminus_btn">+</button>
              </span>
            </div>
          </div>
          <div className="added_product">
            <div className="product_pic">
              <img
                src= "https://www.decoweddings.com/wp-content/uploads/sapphire-blue-art-deco-heels-e1441577428358.jpg"
                alt="product image"
              />
            </div>
            <div>
              <h5>Christian Shoe-JGeTters Skyros</h5>
              <h6>Christian Shoe-JGeTters Skyros</h6>
              <small>
                Quantity: <span className="quantity">2</span>
              </small>
            </div>
            <div>
              <p className="cost">$8,000.00</p>
              <span>
                <button className="plusminus_btn">-</button>
              </span>
              <span>
                <button className="plusminus_btn">+</button>
              </span>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "400px"
            }}
          >
            <div style={{ color: "#696969" }}>SUBTOTAL</div>
            <div className="cost">$33,000.00</div>
          </div>
          <div className="checkout_btn">CHECKOUT</div>
        </div>
      )}
    </>
  );
};

export default SideBar;
