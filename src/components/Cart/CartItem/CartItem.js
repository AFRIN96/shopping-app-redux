import React, { useState } from "react";
import { connect } from "react-redux";
import { adjustQty, deleteFromCart } from "../../../redux/actions/actions";
import styles from "../../Products/Product/Product.module.css";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  GridList,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import { Column, Row, Item } from "@mui-treasury/components/flex";

const useStyles = makeStyles({
  root: {
    // maxWidth: 345,
    backgroundColor: "#e5fcfb",
    height: 310,
    width: 400,
    margin: 20,
    "&:hover": {
      boxShadow: "0 6px 12px 0",
    },
   
  },

  media: {
    height: 100,
  },
  content: {
    padding: 15,
    color: "#fff",
    marginBottom: 0,
    marginLeft: 20,
    fontSize: 20,
  },
  buttons:{
    paddingLeft: 150,
  },
  qty:{
    width: 50,
  },
  qty_label:{
    paddingRight: 30,
  },
});

function CartItem({ itemData, deleteFromCart, adjustQty }) {
  const [input, setInput] = useState(itemData.qty);
  const onChangeQty = (e) => {
    setInput(e.target.value);
    adjustQty(itemData.id, e.target.value);
  };
  const classes = useStyles();
  console.log("itemData", itemData);
  return (
  
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia className={classes.media}>
                <img
                  className={styles.product_image}
                  src={itemData.image}
                  alt={itemData.name}
                />
              </CardMedia>
              <CardContent className={classes.content}>
                <p>{itemData.name}</p>
                <p>Price: Rs.{itemData.price}</p>
              </CardContent>
              <div className={classes.qty_label}>
                <label htmlFor="qty">Qty</label>
                <input
                  min="1"
                  type="number"
                  value={input}
                  id="qty"
                  name="qty"
                  onChange={onChangeQty}
                  className={classes.qty} 
                />
              </div>
            </CardActionArea>
            <CardActions className={classes.buttons}>
              <Button
                className={styles.product_button}
                color="secondary"
                onClick={() => deleteFromCart(itemData.id)}
              >
                Delete
              </Button>
            </CardActions>
          </Card>

  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    deleteFromCart: (id) => dispatch(deleteFromCart(id)),
    adjustQty: (id, value) => dispatch(adjustQty(id, value)),
  };
};
export default connect(null, mapDispatchToProps)(CartItem);
