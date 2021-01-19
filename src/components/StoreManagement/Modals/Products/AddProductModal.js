import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  Divider,
  Form,
  Input,
  Modal,
  Radio,
} from "semantic-ui-react";

const AddProductModal = ({
  getProducts,
  setMessage,
  openAddProductModal,
  setOpenAddProductModal,
  categories,
}) => {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [withOptions, setWithOptions] = useState(false);
  const [optionCounter, setOptionCounter] = useState(0);
  const [optionValue, setOptionValue] = useState({});
  const [ignitor, setIgnitor] = useState('');
  const [error, setError] = useState(false);

  const checkFormErrors = (userObject) => {
    for (let key of Object.keys(userObject)) {
      if (userObject[key].length === 0) {
        setError(true);
        return false;
      }
    }
    setError(false);
    return true;
  };

  const optionsFormFieldsGenerator = () => {
    let options = [];
    for (let i = 0; i < optionCounter; i++) {
      options.push(
        <Form.Group widths="equal">
          <Form.Field
            id={`parameter${i + 1}`}
            control={Input}
            label={`Intitulé ${i + 1}`}
            placeholder="ex: couleurs, taille ..."
          />
          <Form.Field
            id={`value${i + 1}`}
            control={Input}
            label={`Valeurs , séparées par des virgules`}
            placeholder="ex: bleu,blanc,rouge"
            onChange={e => setIgnitor(e.target.value)}
          />
        </Form.Group>
      );
    }
    return options;
  };

  let optionObject = {};
  const optionObjectGenerator = () => {
    for (let i = 0; i < optionsFormFieldsGenerator().length; i++) {
      optionObject[
        document.querySelector(`#parameter${i + 1}`)?.value
      ] = document
        .querySelector(`#value${i + 1}`)
        ?.value.replace(/\s+/g, "")
        .split(",");
    }
    return optionObject;
  };

  const handleChangeRadio = (e, { value }) => setWithOptions({ value });

  let productObject = {};

  const handleSubmit = (e) => {
    e.preventDefault();
    if (withOptions.value === false) {
      productObject = {
        name: productName,
        price: productPrice,
        description: productDescription,
        categoryId: productCategory,
        options: `{"options":["sans options"]}`,
        status: true,
      };
    } else {
      productObject = {
        name: productName,
        price: productPrice,
        description: productDescription,
        categoryId: productCategory,
        options: JSON.stringify(optionValue),
        status: true,
      };
    }
    axios
      .post("/product/create", productObject)
      .then((response) => setMessage(response.data))
      .then(() => getProducts(productCategory))
  };
  useEffect(() => {
    setOptionValue(optionObjectGenerator());
  }, [ignitor]);

  console.log(optionObjectGenerator())
  return (
    <Modal
      open={openAddProductModal}
      onClose={() => setOpenAddProductModal(false)}
      closeIcon
    >
      <Modal.Header>Ajouter un produit</Modal.Header>
      <Modal.Content>
        <Container text textAlign="center">
          <Form onSubmit={handleSubmit}>
            <Form.Field
              control={Input}
              type="text"
              value={productName}
              label="Nom du produit"
              onChange={(e) => setProductName(e.target.value)}
            />
            <Form.Field
              control={Input}
              value={productDescription}
              type="text"
              label="Description du produit"
              onChange={(e) => setProductDescription(e.target.value)}
            />
            <Form.Field
              control={Input}
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
              icon="euro"
              type="number"
              label="Prix du produit"
            />
            <Form.Field control={Input} label="Catégorie du produit">
              <select
                value={productCategory}
                onChange={(e) => setProductCategory(e.target.value)}
              >
                <option value="">Choisissez une categorie</option>
                {categories?.map((category) => (
                  <option value={category._id}>{category.name} </option>
                ))}
              </select>
            </Form.Field>
            <Form.Group>
              <Form.Field>Options ?</Form.Field>
              <Form.Field>
                <Radio
                  label="Avec Options"
                  name="radioGroup"
                  value={true}
                  checked={withOptions.value === true}
                  onChange={handleChangeRadio}
                />
              </Form.Field>
              <Form.Field>
                <Radio
                  label="Sans Options"
                  name="radioGroup"
                  value={false}
                  checked={withOptions.value === false}
                  onChange={handleChangeRadio}
                />
              </Form.Field>
            </Form.Group>
            <Divider />
            {withOptions.value === true && (
              <Container textAlign="center">
                <h4>Vos options</h4>
                <Button
                  icon={{ name: "plus" }}
                  type="button"
                  color="green"
                  size="mini"
                  onClick={(e) => setOptionCounter(optionCounter + 1)}
                />
                <Button disabled size="small">
                  {optionCounter < 0 ? setOptionCounter(0) : optionCounter}
                </Button>
                <Button
                  icon={{ name: "minus" }}
                  type="button"
                  color="red"
                  size="mini"
                  onClick={(e) => setOptionCounter(optionCounter - 1)}
                />
                <Container text textAlign="center">
                  {optionsFormFieldsGenerator()}
                </Container>
              </Container>
            )}
            <Divider hidden />

            <Button color="blue" type="submit" content="Ajouter un produit" />
            <Button
              color="black"
              type="button"
              content="Annuler"
              onClick={(e) => setOpenAddProductModal(false)}
            />
          </Form>
        </Container>
      </Modal.Content>
    </Modal>
  );
};

export default AddProductModal;
