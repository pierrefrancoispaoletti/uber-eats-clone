import React, { useState } from "react";
import {
  Button,
  Container,
  Divider,
  Form,
  Image,
  Modal,
} from "semantic-ui-react";
import { filterFunction } from "../../../../../utils";

const ProductModal = ({
  subCategories,
  isOpenProductModal,
  setIsOpenProductModal,
  products,
  productId,
  addToCart,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [o, setO] = useState(undefined);

  //filtre les sous categories de produit
  //pour trouver celle a laquelle le produit est rataché

  const filteredSubCategories = (productSubId) => {
    return subCategories
      .map((subCategory) => {
        if (subCategory._id === productSubId) {
          return JSON.parse(subCategory.options);
        }
      })
      .find((p) => p !== undefined);
  };
  // trouve de produit dans la liste dont l'id correspond
  const productToFind = products
    ?.map((product) => {
      if (product?._id === productId) {
        return product;
      }
    })
    .find((e) => e !== undefined);

  const options = filteredSubCategories(productToFind?.subCategoryId);

  const item = {
    id: filterFunction(productToFind?.name, o, products)?._id,
    image: filterFunction(productToFind?.name, o, products)?.urlImage,
    name: filterFunction(productToFind?.name, o, products)?.name,
    quantity: quantity,
    unitPrice: Number(filterFunction(productToFind?.name, o, products)?.price),
    options: filterFunction(productToFind?.name, o, products)?.options,
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    if (item?.quantity > 0) {
      addToCart(item);
      setQuantity(1);
    }
    setIsOpenProductModal(false);
  };

  let subCatObject = {};
  const handleChange = (e) => {
    Object.entries(options)
      .reverse()
      .map((option) => {
        return Object.defineProperty(subCatObject, [option[0]], {
          value: document.querySelector(`#${option[0]}`).value,
          enumerable: true,
        });
      });
    setO(subCatObject);
  };
  // console.log(o);
  // console.log(products);
  // console.log(filterFunction(productToFind?.name, o, products));
  return (
    <Modal
      centered
      closeIcon
      open={isOpenProductModal}
      onOpen={() => setIsOpenProductModal(true)}
      onClose={() => {
        setIsOpenProductModal(false);
        setO(undefined);
      }}
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
                <select id={option[0]} defaultValue={0} onChange={handleChange}>
                  <option value=""></option>
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
            <Button
              disabled={!filterFunction(productToFind?.name, o, products)}
              onClick={handleAddToCart}
              size="large"
              color="black"
            >
              Ajouter au panier {quantity} Articles
            </Button>
          </Container>
        </Form>
      </Modal.Content>
    </Modal>
  );
};

export default ProductModal;
