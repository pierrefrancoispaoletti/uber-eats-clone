import React, { useState } from "react";
import {
  Button,
  Container,
  Divider,
  Form,
  Image,
  Modal,
} from "semantic-ui-react";

const ProductModal = ({
  filteredSubCategories,
  isOpenProductModal,
  setIsOpenProductModal,
  products,
  productId,
  addToCart,
  cart,
}) => {
  const [quantity, setQuantity] = useState(1);

  const productToFind = products
    ?.map((product) => {
      if (product?._id === productId) {
        return product;
      }
    })
    .find((e) => e !== undefined);

  const options = filteredSubCategories(productToFind?.subCategoryId);

  const [selectOption, setSelectOption] = useState({});

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

  let test = {};
  const handleChange = (e) => {
    Object.entries(options).map((option) => {
      console.log(option[0])
      //option[0] retourne couleur taille, comment recuperer la valeur correspondante ?
      Object.defineProperty(test, [option[0]], { value: "" });
    });
    setSelectOption(e.target.value);
    console.log(test);
    console.log(e.target.id, e.target.value);
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
          {options &&
            Object.entries(options).map((option) => (
              <>
                <Form.Field>{option[0]}</Form.Field>
                <select
                  id={option[0]}
                  value={selectOption}
                  onChange={handleChange}
                >
                  {option[1].map((value) => (
                    <option value={value}>{value}</option>
                  ))}
                </select>
              </>
            ))}

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
