import React from "react";
import { Placeholder } from "semantic-ui-react";
import LikeComponent from "../../ShopComponents/LikeComponent/LikeComponent";

const ShopItem = ({ name, address, urlImage, open, loading }) => {
  return (
    <>
      {loading ? (
        <Placeholder>
          <Placeholder.Header>
            <Placeholder.Line length="very short" />
            <Placeholder.Line length="medium" />
          </Placeholder.Header>
          <Placeholder.Paragraph>
            <Placeholder.Line length="short" />
            <Placeholder.Line length="long" />
          </Placeholder.Paragraph>
        </Placeholder>
      ) : (
        <div className="shoplist__item">
          <figure height="148px">
            <div className="shoplist__imgwrap">
              <picture>
                <img
                  alt={name}
                  src={
                    urlImage ||
                    "https://kants-merchants.s3.eu-west-2.amazonaws.com/kants.png"
                  }
                  aria-hidden="true"
                />
              </picture>
            </div>
            <LikeComponent />
            {open === false && (
              <figcaption>
                <div>Cette boutique est fermée</div>
              </figcaption>
            )}
          </figure>
          <div className="item__infos">
            <div className="item__info__1">
              <p className="info__name">{name}</p>
              <div className="item__info__2">
                <div className="info__price">{address}</div>
              </div>
            </div>
            {/* <div className="info__rate">{rate}</div> */}
          </div>
        </div>
      )}
    </>
  );
};

export default ShopItem;
