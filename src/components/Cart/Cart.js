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
       
        <img src="https://i.pinimg.com/736x/2e/ac/fa/2eacfa305d7715bdcd86bb4956209038--android.jpg" alt="cart_empty" />
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
