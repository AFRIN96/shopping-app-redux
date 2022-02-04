import React from "react";
import CartItem from "./CartItem/CartItem";
import { connect } from "react-redux";

function Cart({ cart }) {
  console.log("Cart", cart);

  return (
    <div>
      {cart.length ? (
        cart.map((item) => <CartItem key={item.id} itemData={item} />)
      ) : (
        <h1>Cart is Empty</h1>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};
export default connect(mapStateToProps)(Cart);
