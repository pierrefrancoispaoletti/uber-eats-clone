import React from "react";
import Products from "./Products/Products";
import { useParams } from "react-router-dom";
import "./shop.css";
import Top from "./Top/Top";
import { useEffect } from "react/cjs/react.development";
import { useState } from "react";
import axios from "axios";
import { uniqueKeyID } from "../../../utils";

const Shop = ({ shops }) => {
  const { id } = useParams();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get(`/category/${id}`).then((response) => {
      setCategories(response.data.data);
    });
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
      <Products key={uniqueKeyID()} categories={categories} />
    </div>
  );
};

export default Shop;
