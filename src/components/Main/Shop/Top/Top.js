import React from "react";
import { Link } from "react-router-dom";
import LikeComponent from "../../ShopComponents/LikeComponent/LikeComponent";

const Top = ({ name, adress, image, merchantType }) => {
  return (
    <>
      <div className="shop__image">
        <figure>
          <div className="shop__imgwrap">
            <picture>
              <img
                alt=""
                role="presentation"
                src={image}
              />
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
      <div className="shop__category">
        <div className="category">
          {/* ici les merchants type auquel le merchants appartient */}
          {merchantType.map((type) => (
            <>
              <Link to={`/type/${type}`}>{type}</Link>
              <span>&nbsp;•&nbsp;</span>
            </>
          ))}
        </div>
        <p className="adresse">{adress}</p>
      </div>
    </>
  );
};

export default Top;
