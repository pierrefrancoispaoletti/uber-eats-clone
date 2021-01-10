import React from "react";
import { Link } from "react-router-dom";
import ShopImage from "../../ShopComponents/ShopImge/ShopImage";

const Top = ({ name, address, urlImage, type }) => {
  return (
    <>
      <ShopImage name={name} image={urlImage} />
      <div className="shop__category">
        <div className="category">
          {/* ici les merchants type auxquel le merchants appartient */}         
            <>
              <Link to={`/type/${type}`}>{type}</Link>
            </>
        </div>
        <p className="adresse">{address}</p>
      </div>
    </>
  );
};

export default Top;
