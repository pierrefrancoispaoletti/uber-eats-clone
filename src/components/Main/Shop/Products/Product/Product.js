import React from "react";
import {
  Button,
  Container,
  Divider,
  Form,
  Image,
  Modal,
  Radio,
} from "semantic-ui-react";

const Product = ({ isOpenProductModal, setIsOpenProductModal }) => {
  return (
    <Modal
      centered
      closeIcon
      open={isOpenProductModal}
      onClose={() => setIsOpenProductModal(false)}
    >
      <Modal.Header>titre du produit</Modal.Header>
      <Modal.Content image>
        <Image
          centered
          size="medium"
          src="/assets/images/turtle-burger.jpg"
          alt=""
        />
      </Modal.Content>
      <Container textAlign="center">
        <Modal.Description>
          <p>Description du produit</p>
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
                <Button disabled>
                    qty
                </Button>
            <Button circular icon="plus" />
          </Container>
        </Form>
        <Divider />
        <Container textAlign="center">
          <Button size="large" color="black">
            Ajouter au panier x Articles
          </Button>
        </Container>
      </Modal.Content>
    </Modal>
  );
};

export default Product;
