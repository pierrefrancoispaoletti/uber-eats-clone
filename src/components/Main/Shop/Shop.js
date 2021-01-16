import React from "react";
import Products from "./Products/Products";
import { useParams } from "react-router-dom";
import "./shop.css";
import Top from "./Top/Top";
import { useEffect } from "react/cjs/react.development";
import { uniqueKeyID } from "../../../utils";

const Shop = ({ shops, categories, getCategories, categoryLoader }) => {
  const { id } = useParams();
  useEffect(() => {
    getCategories(id);
  }, []);
  const findShopById = shops
    .map((shop) => {
      if (shop._id === id) {
        return shop;
      }
    })
    .find((e) => e !== undefined);
  return (
    <div className="shop">
      <Top {...findShopById} />
      <Products
        categoryLoader={categoryLoader}
        key={uniqueKeyID()}
        categories={categories}
      />
    </div>
  );
};

export default Shop;
