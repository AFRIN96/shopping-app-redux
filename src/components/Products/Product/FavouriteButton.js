import React, { useEffect, useState } from "react";
import { RiHeartFill } from "react-icons/ri";
import { connect } from "react-redux";
import { addToWishlist,deleteFromWishlist } from "../../../redux/actions/actions";

function FavouriteButton({ productsData, addToWishlist, wishlist, deleteFromWishlist }) {
  const [favclr, setfavClr] = useState(true);
  const handleClickAdd = () => {
    addToWishlist(productsData.id);
    console.log(productsData.id ,"iddddd")
    setfavClr(true)
  };
  const handleClickDelete = () => {
    deleteFromWishlist(productsData.id);
    setfavClr(false)
  };
  useEffect(() => {
    if (wishlist.filter((value) => productsData.id !== value.id).length) {
      setfavClr(true);
      console.log( "useEffect", wishlist.filter((value) => productsData.id !== value.id).length)
    } else {
      setfavClr(false);
    }
  }, []);

  return (
    <>
    {console.log(favclr,'///////////')}
      {favclr === false &&  (
        <RiHeartFill style={{ color: "black" , width: 30, height: 50, paddingLeft: 130}} onClick={handleClickAdd} />
      ) 
       } 
       {favclr === true &&
        (
        <RiHeartFill style={{ color: "red", width: 30, height: 50, paddingLeft: 130}} onClick={handleClickDelete} />
        ) }

      { /*favclr === true ? <RiHeartFill style={{ color: "red" }} onClick={handleClick} /> : <RiHeartFill style={{ color: "green"}} onClick={handleClick} />*/}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    wishlist: state.shop.wishlist,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToWishlist: (id) => dispatch(addToWishlist(id)),
    deleteFromWishlist:(id)=> dispatch(deleteFromWishlist(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FavouriteButton);
