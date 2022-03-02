import React from "react";
import styles from "./Product.module.css";
// import { Button } from 'react-bootstrap';
import { RiHeartFill } from "react-icons/ri";
import { connect } from "react-redux";
import { addToCart, addToWishlist } from "../../../redux/actions/actions";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FavouriteButton from "./FavouriteButton";

const useStyles = makeStyles({
  root: {
    // maxWidth: 345,
    flexDirection : "row",
    // backgroundColor: '#e5fcfb',
    backgroundColor: "linear-gradient(45deg, #6dedd5 30%, #ffffff 90%)",
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
    paddingLeft :40,
  },
});

function Product({ productsData, addToCart, addToWishlist }) {
  const classes = useStyles();

  return (
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia className={classes.media}>
              <img
                className={styles.product_image}
                src={productsData.image}
                alt={productsData.name}
              />
            </CardMedia>
            <CardContent className={classes.content}>
              <p>{productsData.name}</p>
              <p>Price: Rs.{productsData.price}</p>
            </CardContent>
          </CardActionArea>
          <CardActions className={classes.buttons}>
            <Button className={styles.product_button} color="secondary" onClick={ () => addToCart(productsData.id)}>
              Add To <img className={styles.addcart__image}
              src="https://cdn-icons-png.flaticon.com/512/4290/4290854.png"
              alt="cart" />
            </Button>
          {console.log(productsData,'productsData')}
            <FavouriteButton productsData={productsData}  onClick={()=> console.log("clicked")}/>
          </CardActions>
        </Card>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    addToWishlist: (id) => dispatch(addToWishlist(id)),
  };
};
export default connect(null, mapDispatchToProps)(Product);
