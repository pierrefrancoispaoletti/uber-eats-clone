import React from "react";

const Populaire = () => {
  return (
    <div className="populaire">
      <div className="populaire__title">Populaires à proximité</div>
      <div className="populaire__list">
        <div className="populaire__item">
          <figure height="128px" className="item__figure">
            <div className="populaire__item__imgwrap">
              <picture></picture>
            </div>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Populaire;
