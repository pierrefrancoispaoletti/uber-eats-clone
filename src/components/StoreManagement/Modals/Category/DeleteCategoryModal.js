import axios from "axios";
import React from "react";
import { Button, Modal } from "semantic-ui-react";

const DeleteCategoryModal = ({
  openDeleteCategoryModal,
  setOpenDeleteCategoryModal,
  categoryName,
  merchantId,
  categoryId,
  setMessage
}) => {
    const categoryToDelete = {
        categoryId,
        merchantId
    }
    const handleDeleteCategory = () => {
        axios.post("/category/delete", categoryToDelete ).then((response) => setMessage(response.data))
        .then(() => setOpenDeleteCategoryModal(false))
    }
  return (
    <Modal
      open={openDeleteCategoryModal}
      onClose={() => setOpenDeleteCategoryModal}
    >
      <Modal.Header>
        Êtes vous sur de vouloir supprimer la catégorie {categoryName} ?
      </Modal.Header>
      <Modal.Content>
        Supprimer une catégorie supprimera tous les produits qui lui sont
        associé, cette action est irréversible !
      </Modal.Content>
      <Modal.Actions>
        <Button
        onClick={handleDeleteCategory}
          color="red"
          content="Oui, je supprime cette catégorie et les produits associés"
        />
        <Button
          color="black"
          content="Annuler"
          onClick={(e) => setOpenDeleteCategoryModal(false)}
        />
      </Modal.Actions>
    </Modal>
  );
};

export default DeleteCategoryModal;
