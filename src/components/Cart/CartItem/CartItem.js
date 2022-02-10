import React, { useState } from "react";
// import Button from "react-bootstrap/esm/Button";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import { adjustQty, deleteFromCart } from "../../../redux/actions/actions";
import styles from "../../Products/Product/Product.module.css";

function CartItem({ itemData, deleteFromCart,adjustQty }) {
 const [input, setInput] = useState(itemData.qty);
  const onChangeQty = (e) => {
  
    setInput(e.target.value);
    adjustQty(itemData.id , e.target.value)
  };

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
      <div className={styles.product_qty}>
        <label htmlFor="qty">Qty</label>
        <input
          min="1"
          type="number"
          value={input}
          id="qty"
          name="qty"
          onChange={onChangeQty}
        />
      </div>
      <Button color="primary" onClick={() => deleteFromCart(itemData.id)}>
        Delete
      </Button>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    deleteFromCart: (id) => dispatch(deleteFromCart(id)),
    adjustQty : (id, value) => dispatch(adjustQty(id,value))
  };
};
export default connect(null, mapDispatchToProps)(CartItem);
