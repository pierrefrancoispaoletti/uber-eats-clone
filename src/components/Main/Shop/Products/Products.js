import React from "react";

const Products = ({ name, price, description, urlImage }) => {
  //une fois qu'on a recupéré le marchand ici on pourra recuperer separement les categories et les produits
  return (
    <div className="products">
      <ul className="products__header">
        <li>
          <h2>titre de la categorie du produit ex: Vetements, Poulet</h2>
          <ul className="products__list">
            <li>
              <div tabIndex={0}>
                <div className="first">
                  <div className="second">
                    <div className="third">
                      <div className="fourth">
                        <h4>
                          <div className="product__title">{name}</div>
                        </h4>
                      </div>
                      <div className="product__description">
                        <div>{description}</div>
                      </div>
                      <div className="product__price">
                        <div>{price}</div>
                      </div>
                    </div>
                    <div className="product__img">
                      <picture>
                        <img
                          alt="Escalope panée"
                          src={urlImage}
                          aria-hidden="true"
                          class="e2 fj gg e1 gh gi"
                        />
                      </picture>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Products;
