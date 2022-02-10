import React from "react";
// import Product from "./Product/Product";
import shopData from "../Products/shopData.json";
import SearchBar from "./SearchBar/SearchBar";
function Products({ products }) {
  return (
    <div>
      <SearchBar data={shopData} />
    </div>
  );
}

export default Products;
