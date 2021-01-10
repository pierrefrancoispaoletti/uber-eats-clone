import React, { useState } from "react";
import Product from "./Product/Product";

const Products = ({ name, price, description, urlImage, merchantId }) => {

  // ici requete au back pour recuperer les categories, sous categories , et ainsi les produits vendus par le merchant
  console.log(merchantId);
  const [isOpenProductModal, setIsOpenProductModal] = useState(false);
  return (
    <>
    <div className="products">
      <ul className="products__header">
        <li>
          <h2>titre de la categorie du produit ex: Vetements, Poulet</h2>
          <ul className="products__list">
            <li>
              <div tabIndex={0} onClick={e => setIsOpenProductModal(true)}>
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
                        <div>{price} €</div>
                      </div>
                    </div>
                    <div className="product__img">
                      <picture>
                        <img
                          alt="Escalope panée"
                          src={urlImage}
                          aria-hidden="true"
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
    <Product isOpenProductModal={isOpenProductModal} setIsOpenProductModal={setIsOpenProductModal} />
    </>
  );
};

export default Products;
