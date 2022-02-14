import React, { useState } from "react";
import {connect} from "react-redux";
import { searchBar } from "../../../redux/actions/actions";
import SearchIcon from "@material-ui/icons/Search";
import Product from "../Product/Product";
import shopData from "../shopData.json";

function SearchBar({ data }) {
  const [filterItems, setFilterItems] = useState([]);
  const handleFilter = (e) => {
    const searchItem = e.target.value;
    const newFilterItem = data.filter((value) => {
      return value.name.toLowerCase().includes(searchItem.toLowerCase());
    });
    if (searchItem === "") {
      setFilterItems([]);
    } else {
      setFilterItems(newFilterItem);
    }
  };
  return (
    <React.Fragment>
    <form>
      <input type="text" placeholder="Search" onChange={handleFilter} />
      <SearchIcon />
    </form>
    <div className="container dashboard_items">
    
      { filterItems.length !==0 ? filterItems.map((prod) => (
        <Product key={prod.id} productsData={prod} />
      )): 
        shopData.map((prod) => (
        <Product key={prod.id} productsData={prod} />
      )) }
      </div>
    </React.Fragment>
    
  );
   
}

const mapStateToProps = (state) => {
    return {
      searchvalue: state.shop.searchvalue,
    };
  };

const mapDispatchToProps = (dispatch) => {
    return {
      searchBar: (id) => dispatch(searchBar(id)),
    };
  };
export default connect(mapStateToProps,mapDispatchToProps)(SearchBar);

// export default SearchBar;
