import React from "react";
import styles from "./Product.module.css";
// import { Button } from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import { addToCart } from "../../../redux/actions/actions";

function Product({ productsData, addToCart }) {
  return (
    <div>
      <img
        className={styles.product_image}
        src={productsData.image}
        alt={productsData.name}
      />
      <p>{productsData.name}</p>
      <p>Price: Rs.{productsData.price}</p>
      <Button variant="primary" onClick={() => addToCart(productsData.id)}>
        Add
      </Button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};
export default connect(null, mapDispatchToProps)(Product);
