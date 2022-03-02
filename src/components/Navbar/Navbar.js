import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../Products/SearchBar/SearchBar";
import SearchIcon from "@material-ui/icons/Search";
import shopData from "../Products/shopData.json";
import Product from "../Products/Product/Product";
import { connect } from "react-redux";
import styles from "./Navbar.module.css";
const Navbar = ({cart}) => {
  const [activeMenu, setActiveMenu] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect (()=>{
    let count= 0;
    cart.forEach((item) => count += item.qty)
    setCartCount(count)

  },[cart,setCartCount])
  return (
    <div className={styles.navbar}>
      <Link
        to="/"
        className={
          activeMenu === "/"
            ? "active navbar__dashboard"
            : styles.navbar__dashboard
        }
        onClick={() => {
          setActiveMenu("/");
        }}
      >
        <h2>Dashboard</h2>
      </Link>
      <Link
        to="/wishlist"
        className={
          activeMenu === "/wishlist"
            ? "active navbar__wishlist"
            : styles.navbar__wishlist
        }
        onClick={() => {
          setActiveMenu("/wishlist");
        }}
      >
        <div>
          <h2>
            Wishlist
            <img
              className={styles.cart__image}
              src="https://apprecs.org/gp/images/app-icons/300/92/com.photox.rlwishlist.jpg"
              alt="wishlist"
            />
          </h2>
        </div>
      </Link>
      <Link
        to="/cart"
        className={
          activeMenu === "/cart" ? "active navbar__cart" : styles.navbar__cart
        }
        onClick={() => {
          setActiveMenu("/cart");
        }}
      >
        <div>
          <h2>
            Cart 
            <img
              className={styles.cart__image}
              src="https://cdn-icons-png.flaticon.com/512/3790/3790779.png"
              alt="cart"
            />({cartCount})
          </h2>
        </div>
      </Link>
    </div>
  );
};
const mapStateToProps =(state)=>{
  return{
    cart : state.shop.cart
  }
}
export default connect (mapStateToProps) (Navbar);
