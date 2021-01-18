import React from "react";
import Products from "./Products/Products";
import { useLocation, useParams } from "react-router-dom";
import "./shop.css";
import Top from "./Top/Top";
import { useEffect } from "react/cjs/react.development";
import { uniqueKeyID } from "../../../utils";

const Shop = ({
  shops,
  categories,
  getCategories,
  categoryLoader,
  merchantId,
  setCategoryId,
  setCategoryName,
  setOpenEditCategoryModal,
  setOpenDeleteCategoryModal
}) => {
  const location = useLocation();
  let { id } = useParams();

  useEffect(() => {
    getCategories(
      location.pathname === "/account/store-management" ? merchantId : id
    );
  }, []);

  const findShopById = shops
    ?.map((shop) => {
      if (shop._id === id || shop._id === merchantId) {
        return shop;
      }
    })
    .find((e) => e !== undefined);
  return (
    <div className="shop">
      <Top {...findShopById} />
      <Products
        categoryLoader={categoryLoader}
        key={uniqueKeyID()}
        categories={categories}
        setCategoryId={setCategoryId}
        setCategoryName={setCategoryName}
        setOpenEditCategoryModal={setOpenEditCategoryModal}
        setOpenDeleteCategoryModal={setOpenDeleteCategoryModal}
      />
    </div>
  );
};

export default Shop;
