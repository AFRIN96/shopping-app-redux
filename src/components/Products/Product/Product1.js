import React from "react";
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
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useFourThreeCardMediaStyles } from "@mui-treasury/styles/cardMedia/fourThree";

import Color from "color";

import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(() => ({
  actionArea: {
    borderRadius: 16,
    transition: "0.2s",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  card: ({ color }) => ({
    minWidth: 256,
    borderRadius: 16,
    boxShadow: "none",
    "&:hover": {
      boxShadow: `0 6px 12px 0 ${Color(color)
        .rotate(-12)
        .darken(0.2)
        .fade(0.5)}`,
    },
  }),
  content: ({ color }) => {
    return {
      backgroundColor: color,
      padding: "1rem 1.5rem 1.5rem",
    };
  },
  title: {
    fontFamily: "Keania One",
    fontSize: "2rem",
    color: "#fff",
    textTransform: "uppercase",
  },
  subtitle: {
    fontFamily: "Montserrat",
    color: "#fff",
    opacity: 0.87,
    marginTop: "2rem",
    fontWeight: 500,
    fontSize: 14,
  },
}));

const useGridStyles = makeStyles(({ breakpoints }) => ({
  root: {
    [breakpoints.up("md")]: {
      justifyContent: "center",
    },
  },
}));

const CustomCard = ({ classes, image, productsData,addToCart,addToWishlist }) => {
  const mediaStyles = useFourThreeCardMediaStyles();
  return (
    <CardActionArea className={classes.actionArea}>
      <Card className={classes.card}>
        <CardMedia classes={mediaStyles} image={image} />
        <CardContent className={classes.content}>
          <p>{productsData.name}</p>
          <p>Price: Rs.{productsData.price}</p>
        </CardContent>
      </Card>
      <CardActions>
        <Button color="primary" onClick={() => addToCart(productsData.id)}>
          Add
        </Button>
        <RiHeartFill onClick={() => addToWishlist(productsData.id)} />
      </CardActions>
    </CardActionArea>
  );
};

function Product1({ productsData, addToCart, addToWishlist }) {
  const gridStyles = useGridStyles();

  const styles2 = useStyles({ color: "#4d137f" });

  return (
    <Grid classes={gridStyles} container spacing={4} wrap={"nowrap"}>
      <Grid item>
        <CustomCard
          classes={styles2}
          title={productsData.name}
          image={productsData.image}
        />
      </Grid>
    </Grid>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    addToWishlist: (id) => dispatch(addToWishlist(id)),
  };
};
export default connect(null, mapDispatchToProps)(Product1);
