import axios from "axios";
import React, { useState } from "react";
import { Button, Container, Form, Input, Modal } from "semantic-ui-react";

const AddCategoryModal = ({
  openAddCategoryModal,
  setOpenAddCategoryModal,
  merchantId,
  setMessage,
}) => {
  const [value, setValue] = useState("");
  const newCategory = {
    merchantId,
    name: value,
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/category/create", newCategory)
      .then((response) => setMessage(response.data))
      .then(() => setOpenAddCategoryModal(false))
      .then(() => setValue(""))
  };
  return (
    <Modal
      closeIcon
      open={openAddCategoryModal}
      onClose={() => setOpenAddCategoryModal(false)}
    >
      <Modal.Header>Ajouter une nouvelle catégorie</Modal.Header>
      <Modal.Content>
        <Container text textAlign="center">
          <Form onSubmit={handleSubmit}>
            <Form.Field
              control={Input}
              value={value}
              label="Nom de la catégorie"
              onChange={(e) => setValue(e.target.value)}
            />
            <Button circular type="submit" color="green" content="Ajouter" />
            <Button
              circular
              color="red"
              content="Annuler"
              onClick={(e) => setOpenAddCategoryModal(false)}
            />
          </Form>
        </Container>
      </Modal.Content>
    </Modal>
  );
};

export default AddCategoryModal;
