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
  subCategories,
  isOpenProductModal,
  setIsOpenProductModal,
  products,
  productId,
  addToCart,
  cart,
}) => {
  const [selectOption, setSelectOption] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [o, setO] = useState(undefined);

  //filtre les osus categories de produit
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
    setSelectOption(e.target.value);
    setO(subCatObject);
  };
  //console.log(o);

  const filterFunction = (optionObject, items) => {
    return items.map((item) => {
      if (
        Object.entries(item.options)
          .toString()
          .localeCompare(Object.entries(optionObject).toString()) === 0 && item.status === true
      ) {
        return item;
      }
    }).filter((e) => e !== undefined);
  };

  console.log(filterFunction(o, products))

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
