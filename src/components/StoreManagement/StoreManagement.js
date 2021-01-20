import React, { useEffect, useState } from "react";
import { Message } from "semantic-ui-react";
import Shop from "../../containers/Shop/Shop.container";
import AdminPanel from "./AdminPanel/AdminPanel";
import AddCategoryModal from "./Modals/Category/AddCategoryModal";
import DeleteCategoryModal from "./Modals/Category/DeleteCategoryModal";
import EditCategoryModal from "./Modals/Category/EditCategoryModal";
import AddProductModal from "./Modals/Products/AddProductModal";

const StoreManagement = ({ user, getMerchants, getCategories, categories, getProducts }) => {
  const [message, setMessage] = useState(undefined);
  const [openAddCategoryModal, setOpenAddCategoryModal] = useState(false);
  const [openEditCategoryModal, setOpenEditCategoryModal] = useState(false);
  const [openDeleteCategoryModal, setOpenDeleteCategoryModal] = useState(false);
  const [openAddProductModal, setOpenAddProductModal] = useState(false);
  const [categoryId, setCategoryId] = useState("");
  const [categoryName, setCategoryName] = useState("");
  useEffect(() => {
    getMerchants(user.address.slice(1));
  }, []);
  return (
    <>
      {message?.status === 200 && (
        <Message
          positive={message?.status === 200}
          content={message?.message}
        />
      )}
      {message?.status === 400 && (
        <Message
          negative={message?.status === 400}
          content={message?.message}
        />
      )}
      {/* <AdminPanel
        openAddCategoryModal={openAddCategoryModal}
        setOpenAddCategoryModal={setOpenAddCategoryModal}
        openAddProductModal={openAddProductModal}
        setOpenAddProductModal={setOpenAddProductModal}
      /> */}
      <Shop
        merchantId={user._id}
        setCategoryId={setCategoryId}
        setCategoryName={setCategoryName}
        setOpenAddCategoryModal={setOpenAddCategoryModal}
        setOpenAddProductModal={setOpenAddProductModal}
        setOpenEditCategoryModal={setOpenEditCategoryModal}
        setOpenDeleteCategoryModal={setOpenDeleteCategoryModal}
      />
      <AddCategoryModal
        merchantId={user._id}
        openAddCategoryModal={openAddCategoryModal}
        setOpenAddCategoryModal={setOpenAddCategoryModal}
        setMessage={setMessage}
        getCategories={getCategories}
      />
      <EditCategoryModal
        merchantId={user._id}
        categoryId={categoryId}
        categoryName={categoryName}
        openEditCategoryModal={openEditCategoryModal}
        setOpenEditCategoryModal={setOpenEditCategoryModal}
        setMessage={setMessage}
        getCategories={getCategories}
      />
      <DeleteCategoryModal
        merchantId={user._id}
        categoryName={categoryName}
        categoryId={categoryId}
        openDeleteCategoryModal={openDeleteCategoryModal}
        setOpenDeleteCategoryModal={setOpenDeleteCategoryModal}
        setMessage={setMessage}
        getCategories={getCategories}
      />
      <AddProductModal
        categoryName={categoryName}
        getProducts={getProducts}
        setMessage={setMessage}
        categories={categories}
        openAddProductModal={openAddProductModal}
        setOpenAddProductModal={setOpenAddProductModal}
      />
    </>
  );
};

export default StoreManagement;
