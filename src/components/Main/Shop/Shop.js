import React from "react";
import Products from "./Products/Products";
import { useParams } from "react-router-dom";
import { Products as shopProducts } from "../../../datas";
import "./shop.css";
import Top from "./Top/Top";

const Shop = ({ shops }) => {
  const { id } = useParams();
    const findShopById = shops.map((shop) => {
      if (shop._id === id) {
        return shop;
      }
    }).find((e) => e !== undefined)
  ;
  return (
    <div className="shop">
      <Top {...findShopById} />
      {shopProducts?.map((product) => (
        <Products merchantId={findShopById._id} key={product?.id} {...product} />
      ))}
    </div>
  );
};

export default Shop;
