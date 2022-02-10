import { Button } from "@material-ui/core";
import React from "react";
import {connect} from "react-redux";
import { deleteFromWishlist } from "../../../redux/actions/actions";
import styles from "../../Products/Product/Product.module.css";
import { RiHeartFill } from "react-icons/ri";

function WishlistItem({ itemData, deleteFromWishlist }) {
    console.log("itemDatainwishlist", itemData);

  return(
  <div>
    <img
      className={styles.product_image}
      src={itemData.image}
      alt={itemData.name}
    />
    <p>{itemData.name}</p>
    <p>Price: Rs.{itemData.price}</p>
    <Button variant="primary" onClick={() => deleteFromWishlist(itemData.id)}>
      Delete
    </Button>
   <RiHeartFill onClick={() => deleteFromWishlist(itemData.id)}/>
  </div>)
}
const mapDispatchToProps =(dispatch)=>{
    return {
        deleteFromWishlist : (id)=> dispatch(deleteFromWishlist(id))
    }
}

export default connect(null,mapDispatchToProps)(WishlistItem);
