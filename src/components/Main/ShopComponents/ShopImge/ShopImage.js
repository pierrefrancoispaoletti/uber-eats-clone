import React from "react";
import LikeComponent from "../LikeComponent/LikeComponent";

const ShopImage = ({ name, image }) => {
  return (
    <div className="shop__image">
      <figure>
        <div className="shop__imgwrap">
          <picture>
            <img alt="" role="presentation" src={image} />
          </picture>
        </div>
        <LikeComponent />
      </figure>
      <div className="shop__spacer">
        <div className="first"></div>
        <div className="second"></div>
        <div className="shop__infos">
          <div className="title">
            <h1>{name}</h1>
            <div className="infos">
              peut contenir diverses infos , me dire si il faut le coder
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopImage;
