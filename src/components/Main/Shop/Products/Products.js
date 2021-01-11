import React, { useState } from "react";
import { uniqueKeyID } from "../../../../utils";
import Product from "./Product/Product";

const Products = ({ categories }) => {
  return (
    <div className="products">
      <ul className="products__header">
        {/* la categorie sur laquelle je boucle renvois tous les produits qui correspondent a la categorie courante  */}
        {categories.map((category) => (
          <li key={uniqueKeyID()}>
            <h2>{category.name}</h2>
            <ul className="products__list">
              <li>
                <Product key={uniqueKeyID()} categoryId={category._id} />
              </li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
