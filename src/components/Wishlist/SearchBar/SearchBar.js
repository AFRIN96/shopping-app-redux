import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import WishlistItem from "../WishlistItem/WishlistItem";

function SearchBar({ data, wishlist }) {
  const [filterItems, setFilterItems] = useState([]);
  const handleFilter = (e) => {
    const searchItem = e.target.value;
    console.log("Search", searchItem);
    const newFilterItem = wishlist.filter((list) => {
      return Object.values(list)
        .join(" ")
        .toLowerCase()
        .includes(searchItem.toLowerCase());
    });

    if (searchItem !== "") {
      setFilterItems(newFilterItem);
    } else {
      setFilterItems(wishlist);
    }

  };
  const renderWishlistItems = wishlist.map((item) => {
    return <WishlistItem key={item.id} itemData={item} />;
  });
  

  if (wishlist.length === 0) {
    return (
      <img
        className="wishlist_empty"
        src="https://i.pinimg.com/originals/f6/e4/64/f6e464230662e7fa4c6a4afb92631aed.png"
        alt="wishlist_empty"
      />
    );
  }
  return (
    <React.Fragment>
      <form>
        <input
          type="text"
          placeholder="Search"
          className="search_box"
          onChange={handleFilter}
        />
        <SearchIcon />
      </form>
   
      <div className="container wishlist_items">
      { console.log("renderWishlistItems", renderWishlistItems.length) 
    
    }
        {
          filterItems.length !== 0
          ? filterItems.map((item) => (
              <WishlistItem key={item.id} itemData={item} />
            ))
          :renderWishlistItems
        }
      </div>
    </React.Fragment>
  );
}
export default SearchBar;
