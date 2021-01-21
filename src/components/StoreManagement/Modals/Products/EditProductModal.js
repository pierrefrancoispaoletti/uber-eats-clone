import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Container, Form, Input, Modal } from "semantic-ui-react";

const EditProductModal = ({
  catId,
  getProducts,
  productToFind,
  isOpenProductModal,
  setIsOpenProductModal,
}) => {
  const [status, setStatus] = useState(productToFind.status);
  const [productName, setProductName] = useState(productToFind.name);
  const [productDescription, setProductDescription] = useState(
    productToFind.description
  );
  const [productPrice, setProductPrice] = useState(productToFind.price);

  let productToEdit = {
    productId: productToFind?._id,
    name: productName,
    price: productPrice,
    description: productDescription,
    status: status,
    options: productToFind?.options,
  };

  useEffect(() => {
    setProductDescription(productToFind.description);
    setProductName(productToFind.name);
    setProductPrice(productToFind.price);
    setStatus(productToFind.status);
  }, [isOpenProductModal]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/product/update", productToEdit)
      .then((response) => console.log(response))
      .then(() => setIsOpenProductModal(false))
      .then(() => getProducts(catId));
  };

  //finaliser ici la suppression d'un produit , rajouter get products et une modale de confirmation de suppression
  const handleDeleteProduct = () => {
    axios
      .post("/product/delete", { productId: productToFind?._id })
      .then((response) => console.log(response))
      .then(() => setIsOpenProductModal(false))
      .then(() => getProducts(catId));
  };
  const handleChangeRadio = (e, { value }) => setStatus(!{ value }.value);
  return (
    <Modal
      open={isOpenProductModal}
      closeIcon
      onClose={() => setIsOpenProductModal(false)}
    >
      <Modal.Header as="h2">{`Editer ${productToFind?.name}`}</Modal.Header>
      <Modal.Header as="h3">
        Ce produit possede les attributs suivants :
        {productToFind && productToFind.options &&
          Object.keys(productToFind?.options)?.map((option) => (
            <span style={{ backgroundColor: "lightGrey" }}>
              {" "}
              {option} {productToFind?.options[option]}
            </span>
          ))}
      </Modal.Header>
      <Modal.Content>
        <Container text textAlign="center">
          <Form onSubmit={handleSubmit}>
            <Form.Field
              control={Input}
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              label="Nom du produit"
            />
            <Form.Field
              control={Input}
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
              label="Description du produit"
            />
            <Form.Field
              control={Input}
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
              icon="euro"
              type="number"
              label="Prix du produit"
            />
            <Form.Radio
              toggle
              value={status}
              checked={status === true}
              label="Disponible ?"
              onChange={handleChangeRadio}
            />
            <Button color="green" compact type="submit" content="Editer" />
            <Button
              color="red"
              compact
              type="button"
              content="Supprimer le produit"
              onClick={handleDeleteProduct}
            />
            <Button
              color="black"
              compact
              type="button"
              content="Annuler"
              onClick={(e) => setIsOpenProductModal(false)}
            />
          </Form>
        </Container>
      </Modal.Content>
    </Modal>
  );
};

export default EditProductModal;
