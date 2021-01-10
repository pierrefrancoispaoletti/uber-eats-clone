import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { slugifyUrl } from "../../../utils";
import ShopItem from "./ShopItem/ShopItem";
import "./shoplist.css";

const ShopList = ({ shops }) => {
  const { type } = useParams();
  const slugifiedType = slugifyUrl(type);
  const filteredShops = shops
    ?.map((shop) => {
      if (slugifyUrl(shop?.type) === slugifiedType) {
        return shop;
      } else {
        return undefined;
      }
    })
    .filter((e) => e !== undefined);
  return (
    <div className="shopList">
      {type && shops !== {} ? (
        <>
          <div className="shopList__shopType">
            <h1>« {type} »</h1>
            <h2>
              {filteredShops?.length || 0 }{" "}
              {filteredShops?.length > 1 ? "Shops" : "Shop"}
            </h2>
          </div>
          {filteredShops?.map(
            (shop) =>
              shop.name && (
                <Link to={`/shop/${slugifyUrl(shop?.name)}/${shop._id}`}>
                  <ShopItem key={shop?._id} {...shop} />
                </Link>
              )
          )}
        </>
      ) : (
        <>
          {shops?.map((shop) => (
            <Link to={`/shop/${slugifyUrl(shop?.name)}/${shop?._id}`}>
              <ShopItem key={shop?._id} {...shop} />
            </Link>
          ))}
        </>
      )}
    </div>
  );
};

export default ShopList;
