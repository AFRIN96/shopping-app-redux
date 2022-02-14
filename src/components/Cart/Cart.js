import React from "react";
import CartItem from "./CartItem/CartItem";
import { connect } from "react-redux";

function Cart({ cart }) {
  console.log("Cart", cart);

  return (
    <div className="cart_items">
      {cart.length ? (
        cart.map((item) => <CartItem key={item.id} itemData={item} />)
      ) : (
        <img src="https://freshcity.co.nz/_resources/themes/option1/images/shopping_cart_empty.jpg" className="cartempty_image" alt="cart_empty" />
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    // cart: state.shop.cart,
    cart: state.shop.cart,
  };
};
export default connect(mapStateToProps)(Cart);
