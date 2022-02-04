import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link to="/">
        <h2 className={styles.navbar__logo}>Dashboard</h2>
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
