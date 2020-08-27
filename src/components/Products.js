import React from "react";
import Product from "../components/Product";
import { connect } from "react-redux";

const Products = ({ products }) => {
  const productList =
    products.length > 0 ? (
      products.map((product) => {
        return <Product product={product} />;
      })
    ) : (
      <p>You have no product in the store!</p>
    );
  return <div className="productlist"> {productList} </div>;
};
const mapStateToProps = (state) => {
  return {
    products: state.products.products,
  };
};

export default connect(mapStateToProps)(Products);
