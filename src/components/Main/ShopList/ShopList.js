import React from "react";
import { Link, Redirect, useParams } from "react-router-dom";
import { slugifyUrl } from "../../../utils";
import ShopItem from "./ShopItem/ShopItem";
import "./shoplist.css";

const ShopList = ({ shops }) => {
  const { type } = useParams();
  const filteredShops = shops
    .map((shop) => {
      if (shop.merchantType.some((t) => t === type)) {
        return shop;
      }
    })
    .filter((e) => e !== undefined);

  return (
    <div className="shopList">
      {type ? (
        <>
          <div className="shopList__shopType">
            <h1>« {type} »</h1>
            <h2>
              {filteredShops?.length}{" "}
              {filteredShops.length > 1 ? "Shops" : "Shop"}
            </h2>
          </div>
          {filteredShops?.map((shop) => (
            <Link to={`/shop/${slugifyUrl(shop.name)}`}>
              <ShopItem key={shop.id} {...shop} />
            </Link>
          ))}
        </>
      ) : (
        <>
          {shops?.map((shop) => (
            <Link to={`/shop/${slugifyUrl(shop.name)}`}>
              <ShopItem key={shop.id} {...shop} />
            </Link>
          ))}
        </>
      )}
    </div>
  );
};

export default ShopList;
