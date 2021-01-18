import React, { useEffect, useState } from "react";
import { Message } from "semantic-ui-react";
import Shop from "../../containers/Shop/Shop.container";
import AdminPanel from "./AdminPanel/AdminPanel";
import AddCategoryModal from "./Modals/Category/AddCategoryModal";
import DeleteCategoryModal from "./Modals/Category/DeleteCategoryModal";
import EditCategoryModal from "./Modals/Category/EditCategoryModal";

const StoreManagement = ({ user, getMerchants }) => {
  const [message, setMessage] = useState(undefined);
  const [openAddCategoryModal, setOpenAddCategoryModal] = useState(false);
  const [openEditCategoryModal, setOpenEditCategoryModal] = useState(false);
  const [openDeleteCategoryModal, setOpenDeleteCategoryModal] = useState(false);
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
      <AdminPanel
        openAddCategoryModal={openAddCategoryModal}
        setOpenAddCategoryModal={setOpenAddCategoryModal}
      />
      <Shop
        merchantId={user._id}
        setCategoryId={setCategoryId}
        setCategoryName={setCategoryName}
        openEditCategoryModal={openEditCategoryModal}
        setOpenEditCategoryModal={setOpenEditCategoryModal}
        setOpenDeleteCategoryModal={setOpenDeleteCategoryModal}
      />
      <AddCategoryModal
        merchantId={user._id}
        openAddCategoryModal={openAddCategoryModal}
        setOpenAddCategoryModal={setOpenAddCategoryModal}
        setMessage={setMessage}
      />
      <EditCategoryModal
        merchantId={user._id}
        categoryId={categoryId}
        categoryName={categoryName}
        openEditCategoryModal={openEditCategoryModal}
        setOpenEditCategoryModal={setOpenEditCategoryModal}
        setMessage={setMessage}
      />
      <DeleteCategoryModal
        merchantId={user._id}
        categoryName={categoryName}
        categoryId={categoryId}
        openDeleteCategoryModal={openDeleteCategoryModal}
        setOpenDeleteCategoryModal={setOpenDeleteCategoryModal}
        setMessage={setMessage}
      />
    </>
  );
};

export default StoreManagement;
