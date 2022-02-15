import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import CartItem from "../CartItem/CartItem";

function SearchBar({ data, cart }) {
  const [filterItems, setFilterItems] = useState([]);
  const handleFilter = (e) => {
    const searchItem = e.target.value;
    const newFilterItem = cart.filter((value) => {
      return value.name.toLowerCase().includes(searchItem.toLowerCase());
    });
    if (searchItem === "") {
      setFilterItems([]);
    } else {
      setFilterItems(newFilterItem);
    }
  };
  return (
    <React.Fragment>
      <form>
        <input type="text" placeholder="Search" className="search_box" onChange={handleFilter} />
        <SearchIcon className="search_icon"/>
      </form>
      <div className="container cart_items">
        {filterItems.length !== 0 ? (
          filterItems.map((item) => <CartItem key={item.id} itemData={item} />)
        ) : cart.length ? (
          cart.map((item) => <CartItem key={item.id} itemData={item} />)
        ) : (
          <img
            src="https://www.kindpng.com/picc/m/174-1749396_empty-cart-your-cart-is-empty-hd-png.png"
            className="cartempty_image"
            alt="cart_empty"
          />
        )}
      </div>
    </React.Fragment>
  );
}
export default SearchBar;
