import React from "react";
import Button from "react-bootstrap/esm/Button";
import { connect } from "react-redux";
import { deleteFromCart } from "../../../redux/actions/actions";
import styles from "../../Products/Product/Product.module.css";

function CartItem({ itemData, deleteFromCart }) {
  console.log("itemData", itemData);
  return (
    <div>
      <img
        className={styles.product_image}
        src={itemData.image}
        alt={itemData.name}
      />
      <p>{itemData.name}</p>
      <p>Price: Rs.{itemData.price}</p>
      <Button variant="primary" onClick={() => deleteFromCart(itemData.id)}>
        Delete
      </Button>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    deleteFromCart: (id) => dispatch(deleteFromCart(id)),
  };
};
export default connect(null, mapDispatchToProps)(CartItem);
