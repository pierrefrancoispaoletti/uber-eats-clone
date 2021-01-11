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
  addToCart,
  cart,
}) => {
  const productToFind = products
    ?.map((product) => {
      if (product?._id === productId) {
        return product;
      }
    })
    .find((e) => e !== undefined);

  const [quantity, setQuantity] = useState(1);

  const item = {
    id: productToFind?._id,
    image: productToFind?.urlImage,
    name: productToFind?.name,
    quantity: quantity,
    unitPrice: Number(productToFind?.price),
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    if (item.quantity > 0) {
      addToCart(item);
      setQuantity(1);
    }
    setIsOpenProductModal(false);
  };

  return (
    <Modal
      centered
      closeIcon
      open={isOpenProductModal}
      onClose={() => setIsOpenProductModal(false)}
    >
      <Modal.Header>{productToFind?.name}</Modal.Header>
      <Modal.Content image>
        <Image centered size="tiny" src={productToFind?.urlImage} alt="" />
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
            <Button
              onClick={(e) =>
                quantity <= 0 ? setQuantity(0) : setQuantity(quantity - 1)
              }
              circular
              icon="minus"
              color="red"
            />
            <Button disabled>
              <strong>{quantity}</strong>
            </Button>
            <Button
              color="green"
              onClick={(e) => setQuantity(quantity + 1)}
              circular
              icon="plus"
            />
          </Container>
          <Divider />
          <Container textAlign="center">
            <h2>Total des articles</h2>
            <p>
              {Number(productToFind?.price) * quantity} <small> € </small>{" "}
            </p>
          </Container>
          <Divider />
          <Container textAlign="center">
            <Button onClick={handleAddToCart} size="large" color="black">
              Ajouter au panier {quantity} Articles
            </Button>
          </Container>
        </Form>
      </Modal.Content>
    </Modal>
  );
};

export default ProductModal;
