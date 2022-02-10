import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link to="/">
        <h2 className={styles.navbar__logo}>Dashboard</h2>
      </Link>
      <Link to="/wishlist">
        <div className={styles.navbar__cart}>
          <h3 className={styles.cart__title}>Wishlist</h3>
          <img
            className={styles.cart__image}
            src="https://i.pinimg.com/236x/65/b3/a0/65b3a019017ea16f5cf181a106b10f17.jpg"
            alt="wishlist"
          />
          </div>
          </Link>
      <Link to="/cart">
        <div className={styles.navbar__cart}>
          <h3 className={styles.cart__title}>Cart</h3>
          <img
            className={styles.cart__image}
            src="https://cdn-icons-png.flaticon.com/512/3081/3081840.png"
            alt="cart"
          />
        </div>
      </Link>
    </div>
  );
};
export default Navbar;
