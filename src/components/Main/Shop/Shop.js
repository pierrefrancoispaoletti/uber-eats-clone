import React from "react";
import Products from "./Products/Products";
import { useParams } from "react-router-dom";
import { Products as shopProducts, Shops } from "../../../datas";
import "./shop.css";
import Top from "./Top/Top";

const Shop = () => {
  const { id } = useParams();
  //ici requete ajax pour recuperer le merchant par l'id app.get('/category/:merchantId'
  return (
    <div className="shop">
      <Top {...Shops[0]} />
      {shopProducts.map((product) => (
        <Products key={product.id} {...product} />
      ))}
    </div>
  );
};

export default Shop;
