import React from "react";
import { connect } from "react-redux";
import WishlistItem from "./WishlistItem/WishlistItem";

function Wishlist({ wishlist }) {
  console.log("wishlist", wishlist);
  return (
    <div>
      {wishlist.length ? (
        wishlist.map((item) => <WishlistItem key={item.id} itemData={item} />)
      ) : (
        <img
          src="https://dial2decor.com/images/no_wish_list.png"
          alt="wishlist_empty"
        />
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    wishlist: state.shop.wishlist,
  };
};
export default connect(mapStateToProps)(Wishlist);
