import React from "react";
import { connect } from "react-redux";
import SearchBar from "./SearchBar/SearchBar";

function Wishlist({ wishlist }) {
  console.log("wishlist", wishlist);
  return (
    <div>
    <SearchBar wishlist={wishlist} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    wishlist: state.shop.wishlist,
  };
};
export default connect(mapStateToProps)(Wishlist);
