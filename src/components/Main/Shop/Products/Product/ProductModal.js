import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Button,
  Container,
  Divider,
  Form,
  Image,
  Modal,
} from "semantic-ui-react";
import { filterFunction } from "../../../../../utils";
import EditProductModal from "../../../../StoreManagement/Modals/Products/EditProductModal";

const ProductModal = ({
  shop,
  isOpenProductModal,
  setIsOpenProductModal,
  catId,
  products,
  productId,
  addToCart,
  getProducts,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [o, setO] = useState({ options: ["sans options"] });
  const [subCategories, setSubCategories] = useState([]);
  const location = useLocation();

  useEffect(() => {
    axios
      .get(`/products/subcategory/category/${catId}`)
      .then((response) => setSubCategories(response.data.data));
  }, [isOpenProductModal]);

  const filteredSubCategories = (productSubId) => {
    return subCategories
      .map((subCategory) => {
        if (subCategory._id === productSubId) {
          return JSON.parse(subCategory.options);
        }
      })
      .find((s) => s !== undefined);
  };
  const productToFind = products
    ?.map((product) => {
      if (product?._id === productId) {
        return product;
      }
    })
    .find((p) => p !== undefined);

  const options = filteredSubCategories(productToFind?.subCategoryId);

  const item = {
    id: filterFunction(productToFind?.name, o, products)?._id,
    image: filterFunction(productToFind?.name, o, products)?.urlImage,
    name: filterFunction(productToFind?.name, o, products)?.name,
    quantity: quantity,
    unitPrice: Number(filterFunction(productToFind?.name, o, products)?.price),
    options: filterFunction(productToFind?.name, o, products)?.options,
    shop,
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    if (item?.quantity > 0 && options) {
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
  return location.pathname === "/account/store-management" &&
    productToFind !== undefined ? (
    <EditProductModal
      catId={catId}
      getProducts={getProducts}
      productToFind={productToFind}
      isOpenProductModal={isOpenProductModal}
      setIsOpenProductModal={setIsOpenProductModal}
    />
  ) : (
    <Modal
      centered
      closeIcon
      open={isOpenProductModal}
      onOpen={() => setIsOpenProductModal(true)}
      onClose={() => {
        setIsOpenProductModal(false);
        setO({ options: ["sans options"] });
        setSubCategories([]);
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
      <Container textAlign="center">
        <Modal.Description>
          <p>
            Prix de l'article{" "}
            {Number(filterFunction(productToFind?.name, o, products)?.price) ||
              Number(productToFind?.price)}{" "}
            €
          </p>
        </Modal.Description>
      </Container>
      <Divider />
      <Modal.Content>
        <Form>
          {options &&
            Object.entries(options).map(
              (option) =>
                option[0] !== "options" && (
                  <>
                    <Form.Field>{option[0]}</Form.Field>
                    <select
                      id={option[0]}
                      defaultValue=""
                      onChange={handleChange}
                    >
                      <option value="">Veuillez faire votre choix</option>
                      {option[1].map((value) => (
                        <option key={value} value={value}>
                          {value}
                        </option>
                      ))}
                    </select>
                    <Divider />
                  </>
                )
            )}
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
              {Number(filterFunction(productToFind?.name, o, products)?.price) *
                quantity || productToFind?.price * quantity}{" "}
              <small> € </small>{" "}
            </p>
          </Container>
          <Divider />
          <Container textAlign="center">
            {filterFunction(productToFind?.name, o, products) !== undefined ? (
              <Button onClick={handleAddToCart} size="large" color="black">
                Ajouter au panier {quantity} Articles
              </Button>
            ) : (
              <Button disabled size="large" color="red">
                Ce produit n'est pas disponible actuelement
              </Button>
            )}
          </Container>
        </Form>
      </Modal.Content>
    </Modal>
  );
};

export default ProductModal;
