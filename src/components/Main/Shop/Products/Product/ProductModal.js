import React, { useState } from "react";
import {
  Button,
  Container,
  Divider,
  Form,
  Image,
  Modal,
  Radio,
} from "semantic-ui-react";

const ProductModal = ({
  isOpenProductModal,
  setIsOpenProductModal,
  products,
  productId,
}) => {
  const productToFind = products?.map((product) => {
    if (product?._id === productId) {
      return product;
    }
  }).find((e) => e !== undefined);

  console.log(productToFind);
  return (
    <Modal
      centered
      closeIcon
      open={isOpenProductModal}
      onClose={() => setIsOpenProductModal(false)}
    >
      <Modal.Header>{productToFind?.name}</Modal.Header>
      <Modal.Content image>
        <Image
          centered
          size="medium"
          src={productToFind?.urlImage}
          alt=""
        />
      </Modal.Content>
      <Container textAlign="center">
        <Modal.Description>
          <p>{productToFind?.description}</p>
        </Modal.Description>
      </Container>
      <Divider />
      <Modal.Content>
        <Form>
          <Form.Field>Choisissez la couleur :</Form.Field>
          <Form.Field>
            <Radio label="Choose this" name="radioGroup" value="this" />
          </Form.Field>
          <Form.Field>
            <Radio label="Or that" name="radioGroup" value="that" />
          </Form.Field>
          <Divider />
          <Form.Field>Choisissez la Taille :</Form.Field>
          <Form.Field>
            <Radio label="Choose this" name="radioGroup" value="this" />
          </Form.Field>
          <Form.Field>
            <Radio label="Or that" name="radioGroup" value="that" />
          </Form.Field>
          <Divider />
          <Container textAlign="center">
            <Button circular icon="minus" />
            <Button disabled>qty</Button>
            <Button circular icon="plus" />
          </Container>
          <Divider />
          <Container textAlign="center">
            <Button size="large" color="black">
              Ajouter au panier x Articles
            </Button>
          </Container>
        </Form>
      </Modal.Content>
    </Modal>
  );
};

export default ProductModal;