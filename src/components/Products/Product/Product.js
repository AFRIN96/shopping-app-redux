import React, {useState,useCallback} from "react";
import styles from "./Product.module.css";
// import { Button } from 'react-bootstrap';
import { RiHeartFill } from "react-icons/ri";

import { connect } from "react-redux";
import { addToCart, addToWishlist } from "../../../redux/actions/actions";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";

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
    padding: 20,
    color: "#fff",
    marginBottom:10,
    marginLeft:50,
    fontSize : 20,
  },
});

function Product({ productsData, addToCart, addToWishlist }) {
  const classes = useStyles();

  return (
    <Box>
      <Grid container spacing={2} item xs={8}>
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
          <CardActions>
            <Button color="secondary" onClick={() => addToCart(productsData.id)}>
              Add
            </Button>
            <RiHeartFill onClick={() => addToWishlist(productsData.id) }/>
          </CardActions>
        </Card>
      </Grid>
    </Box>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    addToWishlist: (id) => dispatch(addToWishlist(id)),
  };
};
export default connect(null, mapDispatchToProps)(Product);
