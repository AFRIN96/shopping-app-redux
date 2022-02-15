import React from "react";
import CartItem from "./CartItem/CartItem";
import { connect } from "react-redux";
import SearchBar from "../Cart/SearchBar/SearchBar";
import shopData from "../Products/shopData.json";

function Cart({ cart }) {
  console.log("Cart", cart);

  return (
    <div>

    <SearchBar data={shopData} cart={cart}/>
      
    </div>
  );
}

const mapStateToProps = (state) => {
  return {    
    cart: state.shop.cart,
  };
};
export default connect(mapStateToProps)(Cart);
