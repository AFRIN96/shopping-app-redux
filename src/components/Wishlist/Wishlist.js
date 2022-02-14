import React from "react";
import { connect } from "react-redux";
import WishlistItem from "./WishlistItem/WishlistItem";

function Wishlist({ wishlist }) {
  console.log("wishlist", wishlist);
  return (
    <div className="wishlist_items">
      {wishlist.length ? (
        wishlist.map((item) => <WishlistItem key={item.id} itemData={item} />)
      ) : (
        <img
        className="wishlist_empty"
          src="https://i.pinimg.com/originals/f6/e4/64/f6e464230662e7fa4c6a4afb92631aed.png"
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
