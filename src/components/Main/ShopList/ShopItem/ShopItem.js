import React from "react";
import LikeComponent from "../../ShopComponents/LikeComponent/LikeComponent";

const ShopItem = ({ name, adress, image, open }) => {
  return (
      <div  className="shoplist__item">
        <figure height="148px">
          <div className="shoplist__imgwrap">
            <picture>
              <img alt={name} src={image} aria-hidden="true" />
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
              <div className="info__price">{adress}</div>
            </div>
          </div>
          {/* <div className="info__rate">{rate}</div> */}
        </div>
      </div>
  );
};

export default ShopItem;
