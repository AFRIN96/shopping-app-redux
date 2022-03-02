import React, { useState, useEffect } from "react";
import SearchIcon from "@material-ui/icons/Search";
import CartItem from "../CartItem/CartItem";
import CartItemTable from "../CartItem/CardItemTable";
import { connect } from "react-redux";
import { adjustQty, deleteFromCart } from "../../../redux/actions/actions";
import { Box, Button, Card } from "@material-ui/core";
import styles from "../../Products/Product/Product.module.css";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import Quantity from "./Quantity";
function SearchbarCart({ data, cart,deleteFromCart,adjustQty }) {
  const [filterItems, setFilterItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
 
  useEffect(() => {
    let price = 0;
    let items = 0;
    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });
    setTotalPrice(price);
    setTotalItems(items);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);
  const handleFilter = (e) => {
    const searchItem = e.target.value;
    const newFilterItem = cart.filter((value) => {
      return Object.values(value)
      .join(" ")

      .toLowerCase()
      .includes(searchItem.toLowerCase());
    });
    if (searchItem === "") {
      setFilterItems([]);
      // <h2>Search Products</h2>
    } else {
      setFilterItems(newFilterItem);
      // setFilterItems(newFilterItembycode);
    }
  };
  if (cart.length === 0) {
    return (
      <img
      src="https://www.kindpng.com/picc/m/174-1749396_empty-cart-your-cart-is-empty-hd-png.png"
      className="cartempty_image"
      alt="cart_empty"
    />
    );
  }
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
        {filterItems.length !== 0 ? (
          filterItems.map((item) => (
            <CartItemTable key={item.id} itemData={item} />
          ))
        ) : (
          <>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="spanning table">
              <TableHead>
                <TableRow>
                  <TableCell>Id</TableCell>
                  <TableCell>Product Code</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Image</TableCell>
                  <TableCell>Qty</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cart.map((item) => {
                  return (
                    <TableRow key={item.id} style ={{ textAlign : "-webkit-math-parent"
                    }}>
                      <TableCell>{item.id}</TableCell>
                      <TableCell>{item.code}</TableCell>

                      <TableCell>{item.name}</TableCell>
                      <TableCell>
                        <img
                          className={styles.product_image}
                          src={item.image}
                          alt={item.name}
                        />
                      </TableCell>
                      <TableCell>
                        <Quantity itemData={item} />
                      </TableCell>
                      <TableCell>{item.price}</TableCell>
                      <TableCell>
                        <Button
                          className={styles.product_button}
                          color="secondary"
                          onClick={() => deleteFromCart(item.id)}
                        >
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })}
              
              </TableBody>
            </Table>
          </TableContainer>
          <Card style={{ width: 200 , height: 50, padding: 10 , margin: 10 }}>Total({totalItems} items): Rs.{totalPrice}</Card>
          </>
        )}

        {/*
          filterItems.length !== 0 ? (
          filterItems.map((item) => <CartItemTable key={item.id} itemData={item} />)
        ) : cart.length ?(
            cart.map((item) => <CartItemTable key={item.id} itemData={item} />)
          ) : (
            <img
              src="https://www.kindpng.com/picc/m/174-1749396_empty-cart-your-cart-is-empty-hd-png.png"
              className="cartempty_image"
              alt="cart_empty"
            />
          )*/}
      </div>
    </React.Fragment>
  );
}
const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleteFromCart: (id) => dispatch(deleteFromCart(id)),
    adjustQty: (id, value) => dispatch(adjustQty(id, value)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchbarCart);
