import React, {useState } from "react";
import Product from "./Product/Product";
import ProductModal from "./Product/ProductModal";

const Products = ({ categories }) => {
  return (
      <div className="products">
        <ul className="products__header">
          <li>
            {categories.map((category) => (
              <>
                <h2>{category.name}</h2>
                <ul className="products__list">
                  <li>
                    <Product categoryId={category._id} />
                  </li>
                </ul>
              </>
            ))}
          </li>
        </ul>
      </div>
  );
};

export default Products;
