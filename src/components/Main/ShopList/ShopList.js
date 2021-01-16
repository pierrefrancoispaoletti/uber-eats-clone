import React from "react";
import { Link, useParams } from "react-router-dom";
import { Placeholder } from "semantic-ui-react";
import { slugifyUrl } from "../../../utils";
import ShopItem from "./ShopItem/ShopItem";
import "./shoplist.css";

const ShopList = ({ shops, loading }) => {
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
              {filteredShops?.length || 0}{" "}
              {filteredShops?.length > 1 ? "Shops" : "Shop"}
            </h2>
          </div>
          {!loading ? (
            filteredShops?.map(
              (shop) =>
                shop.name && (
                  <Link
                    key={shop?._id}
                    to={`/shop/${slugifyUrl(shop?.name)}/${shop._id}`}
                  >
                    <ShopItem {...shop} />
                  </Link>
                )
            )
          ) : (
            <>
              <Placeholder fluid style={{ height: 300 }}>
                <Placeholder.Image rectangular />
              </Placeholder>
              <Placeholder>
                <Placeholder.Paragraph>
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder.Paragraph>
              </Placeholder>
              <Placeholder fluid style={{ height: 300 }}>
                <Placeholder.Image rectangular />
              </Placeholder>
              <Placeholder>
                <Placeholder.Paragraph>
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder.Paragraph>
              </Placeholder>
              <Placeholder fluid style={{ height: 300 }}>
                <Placeholder.Image rectangular />
              </Placeholder>
              <Placeholder>
                <Placeholder.Paragraph>
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder.Paragraph>
              </Placeholder>
              <Placeholder fluid style={{ height: 300 }}>
                <Placeholder.Image rectangular />
              </Placeholder>
              <Placeholder>
                <Placeholder.Paragraph>
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder.Paragraph>
              </Placeholder>
            </>

          )}
        </>
      ) : (
        <>
        {!loading ? (
            shops?.map(
              (shop) =>
                shop.name && (
                  <Link
                    key={shop?._id}
                    to={`/shop/${slugifyUrl(shop?.name)}/${shop._id}`}
                  >
                    <ShopItem {...shop} />
                  </Link>
                )
            )
          ) : (
            <>
              <Placeholder fluid style={{ height: 300 }}>
                <Placeholder.Image rectangular />
              </Placeholder>
              <Placeholder>
                <Placeholder.Paragraph>
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder.Paragraph>
              </Placeholder>
              <Placeholder fluid style={{ height: 300 }}>
                <Placeholder.Image rectangular />
              </Placeholder>
              <Placeholder>
                <Placeholder.Paragraph>
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder.Paragraph>
              </Placeholder>
              <Placeholder fluid style={{ height: 300 }}>
                <Placeholder.Image rectangular />
              </Placeholder>
              <Placeholder>
                <Placeholder.Paragraph>
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder.Paragraph>
              </Placeholder>
              <Placeholder fluid style={{ height: 300 }}>
                <Placeholder.Image rectangular />
              </Placeholder>
              <Placeholder>
                <Placeholder.Paragraph>
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder.Paragraph>
              </Placeholder>
            </>

          )}
        </>
      )}
    </div>
  );
};

export default ShopList;
