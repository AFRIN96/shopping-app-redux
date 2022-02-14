import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../Products/SearchBar/SearchBar";
import SearchIcon from "@material-ui/icons/Search";
import shopData from "../Products/shopData.json";
import Product from "../Products/Product/Product";

import styles from "./Navbar.module.css";
const Navbar = () => {
  const [filterItems, setFilterItems] = useState([]);
  const handleFilter = (e) => {
    const searchItem = e.target.value;
    console.log("search", searchItem)
    const newFilterItem = shopData.filter((value) => {
      return value.name.toLowerCase().includes(searchItem.toLowerCase());
    });
    if (searchItem === "") {
      setFilterItems([]);
    } else {
      setFilterItems(newFilterItem);
      console.log("newFilterItem", newFilterItem)

    }
    console.log("filterItems",filterItems)
  };
  return (
    <div className={styles.navbar}>
      <Link to="/" className={styles.link}>
        <h2 className={styles.navbar__logo}>Dashboard</h2>
      </Link>
      <Link to="/wishlist"  className={styles.link}>
        <div className={styles.navbar__wishlist}>
          <h3 className={styles.cart__title}>Wishlist</h3>
          <img
            className={styles.cart__image}
            src="https://i.pinimg.com/236x/65/b3/a0/65b3a019017ea16f5cf181a106b10f17.jpg"
            alt="wishlist"
          />
        </div>
      </Link>
      <Link to="/cart"  className={styles.link}>
        <div className={styles.navbar__cart}>
          <h3 className={styles.cart__title}>Cart</h3>
          <img
            className={styles.cart__image}
            src="https://cdn-icons-png.flaticon.com/512/3081/3081840.png"
            alt="cart"
          />
        </div>
      </Link>
      <Link to="/search" className={styles.link}>
        <div className={styles.navbar__cart}>
          <h3 className={styles.cart__title}>Search</h3>
        </div>
      </Link>

   {/*    <div className={styles.navbar__cart}>
        <form>
          <input type="text" placeholder="Search" onChange={handleFilter} />
          <SearchIcon />
        </form>
        {filterItems.length !==0 ? ( filterItems.map((prod) => (
          <Product key={prod.id} productsData={prod} />
        ))) :  (<h2>No Results</h2> )}
      </div>
      */}

      {/*  <React.Fragment>
            <form>
              <input type="text" placeholder="Search" onChange={handleFilter} />
              <SearchIcon />
            </form>
            <div className="container dashboard_items">
              {filterItems.length !== 0
                ? filterItems.map((prod) => (
                    <Product key={prod.id} productsData={prod} />
                  ))
                : shopData.map((prod) => (
                    <Product key={prod.id} productsData={prod} />
                  ))}
            </div>
          </React.Fragment>
          */}
    </div>
  );
};
export default Navbar;
