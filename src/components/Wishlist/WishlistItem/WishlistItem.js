import React from "react";
import {connect} from "react-redux";
import { deleteFromWishlist } from "../../../redux/actions/actions";
import styles from "../../Products/Product/Product.module.css";
import { RiHeartFill } from "react-icons/ri";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    // maxWidth: 345,
    backgroundColor: '#e5fcfb',
    height: 300,
    width: 400,
    margin: 20,
    '&:hover': {
      boxShadow: "0 6px 12px 0",
    },
  },
  
  media: {
    height: 100,
  },
  content: {
    padding: 10,
    color: "#fff",
    marginBottom:10,
    marginLeft:50,
    fontSize : 20,
  },
  buttons:{
    paddingLeft: 180,
  },
});


function WishlistItem({ itemData, deleteFromWishlist }) {
  const classes = useStyles();

    console.log("itemDatainwishlist", itemData);

  return(
 
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
        </CardActionArea>
        <CardActions className={classes.buttons}>
          <Button className={styles.product_button} color="secondary" onClick={() => deleteFromWishlist(itemData.id)}>
          Delete
          </Button>
        </CardActions>
      </Card>
  
  )
}
const mapDispatchToProps =(dispatch)=>{
    return {
        deleteFromWishlist : (id)=> dispatch(deleteFromWishlist(id))
    }
}

export default connect(null,mapDispatchToProps)(WishlistItem);
