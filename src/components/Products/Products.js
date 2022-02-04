import React from "react";
import Product from "./Product/Product";
import shopData from "../Products/shopData.json";
function Products({ products }) {
  return (
    <div>
      {shopData.map((prod) => (
        <Product key={prod.id} productsData={prod} />
      ))}
    </div>
  );
}

export default Products;
