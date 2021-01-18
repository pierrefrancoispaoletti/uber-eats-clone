import axios from "axios";
import React, { useState } from "react";
import { Button, Container, Form, Input, Modal } from "semantic-ui-react";

const EditCategoryModal = ({
  merchantId,
  setMessage,
  categoryName,
  categoryId,
  openEditCategoryModal,
  setOpenEditCategoryModal,
}) => {

  const [value, setValue] = useState(categoryName);
  const updatedCategory = {
    merchantId,
    name: value,
    categoryId,
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/category/update", updatedCategory)
      .then((response) => setMessage(response.data))
      .then(() => setOpenEditCategoryModal(false));
  };
  return (
    <Modal
      closeIcon
      open={openEditCategoryModal}
      onClose={() => setOpenEditCategoryModal(false)}
    >
      <Modal.Header>Editer la Catégorie : {categoryName}</Modal.Header>
      <Modal.Content>
        <Container text textAlign="center">
          <Form onSubmit={handleSubmit}>
            <Form.Field
              control={Input}
              value={value}
              label="Nouveau nom de la catégorie"
              onChange={(e) => setValue(e.target.value)}

            />
            <Button circular type="submit" color="green" content="Editer" />
            <Button
              circular
              color="red"
              content="Annuler"
              onClick={(e) => setOpenEditCategoryModal(false)}
            />
          </Form>
        </Container>
      </Modal.Content>
    </Modal>
  );
};

export default EditCategoryModal;
