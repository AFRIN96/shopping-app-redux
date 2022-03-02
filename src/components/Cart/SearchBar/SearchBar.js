import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import CartItem from "../CartItem/CartItem";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import CardItemTable from "../CartItem/CardItemTable";
function SearchBar({ data, cart }) {
  const [filterItems, setFilterItems] = useState([]);
  const handleFilter = (e) => {
    const searchItem = e.target.value;
    const newFilterItembyname = cart.filter((value) => {
      return value.name.toLowerCase().includes(searchItem.toLowerCase());
    });
    const newFilterItembycode = cart.filter((value) => {
      return value.code.toLowerCase().includes(searchItem.toLowerCase());
    });
    if (searchItem === "") {
      setFilterItems([]);
      // <h2>Search Products</h2>
    } else{
      setFilterItems(newFilterItembyname,newFilterItembycode);
      // setFilterItems(newFilterItembycode);
    }
    
  };
  return (
    <React.Fragment>
      <form>
        <input
          type="text"
          placeholder="Search"
          className="search_box"
          onChange={handleFilter}
        />
        <SearchIcon className="search_icon" />
      </form>
      <div className="container cart_items">
      { console.log("filterItems", filterItems.length)}
        {
          filterItems.length  ? (
          filterItems.map((item) => <CartItem key={item.id} itemData={item} />)
        ) :  <h2>Search Products</h2>}
        
        {filterItems.length === 0 ?  cart.length ? 
          
            cart.map((item) => <CardItemTable key={item.id} itemData={item} />)
         
         : (
          <img
            src="https://www.kindpng.com/picc/m/174-1749396_empty-cart-your-cart-is-empty-hd-png.png"
            className="cartempty_image"
            alt="cart_empty"
          />
        ) : null }
      </div>
    </React.Fragment>
  );
}
export default SearchBar;
